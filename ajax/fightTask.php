<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['task'])){
$task = $_GET['task'];
$status = "0";
$created = time();


$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);
}
?>