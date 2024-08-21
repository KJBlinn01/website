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
    
    // The results are ordered by the last name in ascending order
    $sql = "SELECT first_name, last_name, email FROM Person ORDER BY last_name";

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
        echo "0 results";
    }

    // Close the database connection
    mysqli_close($mysqli);
}
?>
