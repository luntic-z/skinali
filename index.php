<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skinali</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/normalize.css">
  <script src="js/script.js" defer></script>
  <script src="js/person.js" defer></script>
</head>

<body>
  <?php include_once('blocks/header/header.php'); ?>
  
  <?php include_once('blocks/offer/offer.html'); ?>

  <?php include_once('blocks/features/features.html'); ?>

  <?php include_once('blocks/gallery/gallery.html'); ?>

  <?php include_once('blocks/price/price.html'); ?>

  <!-- reviews -->
  
  <?php include_once('blocks/production/production.html'); ?>

  <?php include_once('blocks/info/info.html'); ?>
  
  <?php include_once('blocks/offer/offer-price.html'); ?>
  
  <?php include_once('blocks/footer/footer.php'); ?>
  <!-- Подключение виджета Spikmi -->
  <script type="text/javascript" src="https://spikmi.org/Widget?Id=11613"></script>
</body>

</html>