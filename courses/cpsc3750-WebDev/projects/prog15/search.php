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

    // Retrieve the 'last_name' parameter from the GET request
    $last_name = $_GET['last_name'];

    // Convert the last name to lowercase to ensure the search is case-insensitive
    $last_name_lower = strtolower($last_name);

    // select the first name, last name, and email from the 'Person' table based on search
    $sql = "SELECT first_name, last_name, email FROM Person WHERE LOWER(last_name) = '$last_name_lower'";
    
    // Execute the query and get the result
    $result = $mysqli->query($sql);

    // Check if any records were found
    if ($result->num_rows > 0) {

        // If records are found, fetch and display each record
        while($row = $result->fetch_assoc()) {
            echo "Name: " . $row["first_name"]. " " . $row["last_name"]. " - Email: " . $row["email"]. "<br>";
        }
    } 
    else {
        echo "0 results found";
    }

    // Close the database connection
    mysqli_close($mysqli);
}
?>
