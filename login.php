<?php
// wp-content/themes/twentysixteen-child/login.php

/*
Template Name: Login Page
*/

$client_id = 'OUt4wieEeBx8kZgkobWwtROc0BXxzu';
$client_secret = 'snoWsVeGAti7CD7TYv4V1xMQKMrIk0';

$code = false;
if(isset($_GET['code'])) {
    $code = $_GET['code'];
}

// If there is no code present, first get the code by redirecting to login page
if(!$code) {

    $url = site_url() . '?oauth=authorize&response_type=code&client_id=' . $client_id;
    header('Location: ' . $url);
    die();

} else {

    // Encode the client ID and secret with base64 in
    // order to add it to the Authorization header
    $auth = base64_encode($client_id.':'.$client_secret);
    try {

        // Making the Call to get the access token
        $args = [
            'headers' => [
                'Authorization' => 'Basic ' . $auth
            ],
            'body' => [
                'grant_type'    => 'authorization_code',
                'code'          => $code
            ],
    ];

        // Send the actual HTTP POST with the built-in WordPress HTTP library.
        $json = wp_remote_post( site_url() . '?oauth=token', $args );

        if(is_array($json) && isset($json['body'])) {

            $json = json_decode($json['body']);

            // Retrieve the access token from the response
            $auth_token = $json->access_token;
            $user_id = get_current_user_id();


            // Set the cookie
            setcookie('wordpress_access_token', $auth_token, time() + 3600, '/', preg_replace('#^https?://#', '', rtrim(site_url(),'/')), 0);

            // Save the cookie to user meta
            // Can be useful for debugging or if needed to refresh the cookie
            update_user_meta($user_id, 'wordpress_access_token', $auth_token);
        } else {
            print_r($json);
            die();
        }

        // All set, redirect to the home page
        header('Location: ' . site_url());
    } catch (Exception $e) {
        var_dump($e);
    }
}
