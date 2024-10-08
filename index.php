<?php
// require_once __DIR__ . "/./dischi/dischi.json";

$dischi = file_get_contents("./dischi/dischi.json");
$dischi = json_decode($dischi);

// header("Content-Type: application/json");

var_dump($dischi);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1></h1>
</body>

</html>