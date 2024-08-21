<?php
//$mysqli = mysqli_connect("localhost", "dwooster", "pass", "record_company");
$dbhost = "localhost";
$dbuser = "dwooster";
$dbpass = "pass";
$dbname = "record_company";

// create a connection to the db
try {
	$pdo = new PDO("mysql:host=" . $dbhost . ";dbname=" . $dbname, $dbuser, $dbpass);
} catch (PDOException $err) {
	echo "Database connection error: " . $err->getMessage();
	exit();
}
?>
