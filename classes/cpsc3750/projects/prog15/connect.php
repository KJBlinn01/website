<?php

// Name: Kevin Blinn
// Class: CPSC 3750
// Date Due: July 27th, 2024
// Assignment: Prog15 - Integrate with DB

// Connect to the MySQL database using mysqli
$mysqli = mysqli_connect("eldz2", "kjblinnc_Prog15", "testMyProg15!", "kjblinnc_prog15");

// Check if the connection was successful
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
} 
else {
    // SQL statement to create the 'Person' table if it does not already exist
    $sql = "CREATE TABLE IF NOT EXISTS Person (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        first_name VARCHAR(30) NOT NULL,               
        last_name VARCHAR(30) NOT NULL,                
        email VARCHAR(50),                             
        reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    // Execute the SQL query
    if (mysqli_query($mysqli, $sql)) {
        echo "Table Person created successfully";
    } 
    else {
        echo "Error creating table: " . mysqli_error($mysqli);
    }

    // Close the database connection
    mysqli_close($mysqli);
}
?>
