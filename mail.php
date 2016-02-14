<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];
$formcontent="From: $name \n Email: $email \n Phone: $phone \n Website: $website \n Message: $message";
$recipient = "danielwpape+websiteform@gmail.com";
$subject = "Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent) or die("Error!");
?>
<html>
   <head>
      <title>Daniel Pape - iOS Developer &amp; Designer based in London</title>
      <meta charset="utf-8">
      <link rel="author" type="text/plain" href="/humans.txt">
      <link rel="manifest" href="/manifest.json">
      <link rel="stylesheet" type="text/css" href="gutenweb.css">
      <script src="/script.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy|Work+Sans:200,400' rel='stylesheet' type='text/css'>
      <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-32006853-1', 'auto'); ga('send', 'pageview');</script> 
      
   </head>
   <body class="midHeight">
      <div class="container">
         <nav class="main-nav">
            <div id="menu"><a href="/about.html">ABOUT</a> <a href="/apps.html">APPS</a> <a href="/contact.html">CONTACT</a></center>
         </nav>
         <div id="header">
            <h1>Daniel Pape</br><b>iOS Developer &amp; Designer</b></h1>
         </div>
         <p>Thanks for getting in touch, I will reply when I am able.</p>
      </div>
   </body>
</html>