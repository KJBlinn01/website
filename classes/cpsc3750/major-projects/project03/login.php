<?php
session_start();
require 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    $stmt = $mysqli->prepare("SELECT userID, name, password FROM Users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($userID, $name, $hashedPassword);
    $stmt->fetch();

    // Check if user exists and the password is correct
    if (!empty($userID) && password_verify($password, $hashedPassword)) {
        $_SESSION['userID'] = $userID;
        $_SESSION['name'] = $name;
        echo json_encode(['status' => 'success', 'message' => 'Login successful', 'name' => $name, 'userID' => $userID]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
    }

    $stmt->close();
    mysqli_close($mysqli);
}
?>