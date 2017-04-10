<?php

add_filter( 'rest_prepare_post', 'dt_use_raw_post_content', 10, 3 );

function dt_use_raw_post_content( $data, $post, $request ) {
    // $data->data['content']['plaintext'] = 'aaaaaaaa';
    $data->data['content']['rendered'] = $post->post_content;
    return $data;
}

function iconic_prepare_product( $response, $post, $request ) {

    if( empty( $response->data ) )
        return $response;

    // $response->data['content'] = serialize($post->id); // to see what we get

    // $response->data['content'] = $post->id;     // to get post id call $post->id;

    // $response->data['content'] = get_field( 'desc', $post->id );    //get custom field by fieldname and post id. depends on language
    $response->data = []; // kill all responce data
    $content_post = get_post($post->id);

    // $response->data['response'] = serialize($response->href);    //get custom field by fieldname and post id
    $response->data['lang'] = qtrans_getLanguage();    //get custom field by fieldname and post id
    $response->data['name'] = qtrans_use(qtrans_getLanguage(),$content_post->post_title, false);    //get custom field by fieldname and post id
    $response->data['description'] = qtrans_use(qtrans_getLanguage(),$content_post->post_content, false);    //get custom field by fieldname and post id

    return $response;

}

add_filter( "woocommerce_rest_prepare_product_object", "iconic_prepare_product", 10, 3 );
// wp-content/themes/twentysixteen-child/functions.php

// Only for admin
if (current_user_can('manage_options')) {
    add_action('admin_notices', 'display_user_token');
}

function display_user_token() {
    $user_id = get_current_user_id();
    $auth_token = get_user_meta( $user_id, 'wordpress_access_token', true);
    echo $auth_token;
}

add_filter( 'login_redirect', 'ab_login_redirect', 10, 3 );

function ab_login_redirect( $redirect_to, $request, $user ) {
    return site_url() . '/login';
}

add_action ( 'login_form_logout' , 'ab_cookie_remove_logout' );

function ab_cookie_remove_logout() {
    setcookie('wordpress_access_token', "expired", time() - 3600, '/', preg_replace('#^https?://#', '', rtrim(site_url(),'/')), 0);
    wp_logout();
}

?>
