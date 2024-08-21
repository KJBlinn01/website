<?php
// Name: Kevin Blinn
// Class: CPSC 3750
// Date Due: July 27th, 2024
// Assignment: Prog15 - Integrate with DB

// Include the database connection file
include 'connect.php';

// Connect to the MySQL database using mysqli
$mysqli = mysqli_connect("eldz2", "kjblinnc_Prog15", "testMyProg15!", "kjblinnc_prog15");

// Check if the connection was successful
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
} 
else {

    // Retrieve form data sent via POST request
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];

    // SQL query to insert a new record into the 'Person' table
    $sql = "INSERT INTO Person (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";

    // Execute the query and check if it was successful
    if ($mysqli->query($sql) === TRUE) {
        echo "New record created successfully";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }

    // Close the database connection
    mysqli_close($mysqli);
}
?>
