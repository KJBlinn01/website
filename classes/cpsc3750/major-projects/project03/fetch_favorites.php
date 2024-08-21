<?php
session_start();
require 'connect.php';

if (isset($_SESSION['userID'])) {
    $userID = $_SESSION['userID'];
    
    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    $stmt = $mysqli->prepare("SELECT gameID FROM Favorites WHERE userID = ?");
    $stmt->bind_param("i", $userID);
    $stmt->execute();
    $result = $stmt->get_result();
    $favorites = [];

    while ($row = $result->fetch_assoc()) {
        $favorites[] = $row['gameID'];
    }

    echo json_encode(['status' => 'success', 'favorites' => $favorites]);

    $stmt->close();
    mysqli_close($mysqli);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Please log in to view favorites.']);
}
