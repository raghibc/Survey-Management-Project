<?php
require 'database.php';

$id = $_GET['id'];

$sql = "SELECT * FROM `answers` WHERE `id` = '{$id}' LIMIT 1";

$result = mysqli_query($db, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);


?>