<?php
require 'connect.php';

$mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

if (mysqli_connect_errno()) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
    exit();
}

$query = "SELECT userID, name, email, created_at, last_login, login_count, failed_attempts, is_locked FROM Users";
$result = $mysqli->query($query);

if ($result) {
    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode(['status' => 'success', 'users' => $users]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch user list: ' . $mysqli->error]);
}

mysqli_close($mysqli);
?>
