<?php
include "conf.php";
class Html {
    public static function Head(string $title = "FiveM Crimelife, FFA & mehr.", string $description = "Auf unserem FiveM Server One Tap habt ihr viele Möglichkeiten mit euren Freunden Spaß zu haben, Spielt Crimelife, Free-For-All. Battle Royal & mehr kommen bald, bleibe dran!"): void
    {
        global $assets;
        echo
        "
<title>One Tap • $title</title>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' href='$assets/css/stylesheet.css'>
<link rel='icon' href='$assets/img/logo.png'>
<script src='https://code.jquery.com/jquery-3.6.1.min.js' integrity='sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=' crossorigin='anonymous'></script>
<meta name='title' content='One Tap • $title'>
<meta name='description' content='$description'>

<meta property='og:type' content='website'>
<meta property='og:url' content='https://onetapfivem.com'>
<meta property='og:title' content='One Tap • $title'>
<meta property='og:description' content='$description'>
<meta property='og:image' content='$assets/img/banner.png'>

<meta property='twitter:card' content='summary_large_image'>
<meta property='twitter:url' content='https://onetapfivem.com'>
<meta property='twitter:title' content='One Tap • $title'>
<meta property='twitter:description' content='$description'>
<meta property='twitter:image' content='$assets/img/banner.png'>
<link rel='preconnect' href='https://fonts.googleapis.com'> 
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin> 
<link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'>
";
    }
}