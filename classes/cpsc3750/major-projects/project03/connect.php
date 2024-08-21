<?php
// Connect to the MySQL database using mysqli
$mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

// Check if the connection was successful
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
} 
else {
    // Close the database connection
    mysqli_close($mysqli);
}
?>

