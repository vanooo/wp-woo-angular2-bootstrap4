<?php
/**
 * Template name: app
 *
 */
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>WP</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
    <app-root>Loading...</app-root>
    <script src="../node_modules/tether/dist/js/tether.min.js"></script>
    <script src="../node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- <script src="../node_modules/crypto-js/crypto-js.js"></script>
    <script src="../node_modules/oauth-1.0a/oauth-1.0a.js"></script> -->
    <script>
      $(document).ready(function () {
        $('[data-toggle="offcanvas"]').click(function () {
          $('.row-offcanvas').toggleClass('active')
        });
      });
    </script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/inline.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/inline.bundle.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/polyfills.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/polyfills.bundle.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/scripts.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/scripts.bundle.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/styles.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/styles.bundle.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/vendor.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/vendor.bundle.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/dist/main.bundle.js'; echo '?' . filemtime( get_stylesheet_directory() . '/dist/main.bundle.js'); ?>"></script>

</html>
