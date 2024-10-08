<?php
$dischi = file_get_contents("./dischi/dischi.json");
// $dischi = json_decode($dischi, true);

header("Content-Type: application/json");

// var_dump($dischi);
echo $dischi;
