<?php
session_start();
require 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $newPassword = password_hash($_POST['new_password'], PASSWORD_DEFAULT);

    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    // Update the user's password and reset the failed attempts and lock status
    $stmt = $mysqli->prepare("UPDATE Users SET password = ?, failed_attempts = 0, is_locked = FALSE WHERE email = ?");
    $stmt->bind_param("ss", $newPassword, $email);

    if ($stmt->execute()) {
        // Log the user in immediately
        $stmt = $mysqli->prepare("SELECT userID, name FROM Users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($userID, $name);
        $stmt->fetch();

        $_SESSION['userID'] = $userID;
        $_SESSION['name'] = $name;

        echo json_encode(['status' => 'success', 'message' => 'Password reset successful. You are now logged in.', 'name' => $name]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to reset password: ' . $stmt->error]);
    }

    $stmt->close();
    mysqli_close($mysqli);
}
?>
