<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");

include_once "html.php";

$locals = array(
    "127.0.0.1",
    "::1"
);
$assets = "http://localhost/onetapfivem-website/assets";
if(!in_array($_SERVER["REMOTE_ADDR"], $locals)){
    $assets = "https://onetapfivem.com/assets";
}
