<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
<!--[if lt IE 9]><script src="<?php print base_path() . drupal_get_path('theme', 'business') . '/js/html5.js'; ?>"></script><![endif]-->
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <script src="<?php print base_path() . drupal_get_path('theme', 'business') . '/js/script.js'; ?>"></script>
<!--  <script src="--><?php //print base_path() . drupal_get_path('theme', 'business') . '/js/shadowbox-3.0.3/shadowbox.js'; ?><!--"></script>-->

</body>
</html>