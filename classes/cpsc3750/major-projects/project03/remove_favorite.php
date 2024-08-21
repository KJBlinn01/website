<?php
session_start();
require 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_SESSION['userID'])) {
        echo json_encode(['status' => 'error', 'message' => 'Please log in to remove favorites.']);
        exit();
    }

    $userID = $_SESSION['userID'];
    $gameID = $_POST['game_id'];

    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    $stmt = $mysqli->prepare("DELETE FROM Favorites WHERE userID = ? AND gameID = ?");
    $stmt->bind_param("ii", $userID, $gameID);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Game removed from favorites']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to remove game from favorites: ' . $stmt->error]);
    }

    $stmt->close();
    mysqli_close($mysqli);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
