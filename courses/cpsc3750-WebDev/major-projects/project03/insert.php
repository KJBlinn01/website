<?php
require 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    $stmt = $mysqli->prepare("INSERT INTO Users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $password);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to register user: ' . $stmt->error]);
    }

    $stmt->close();
    mysqli_close($mysqli);
}
?>