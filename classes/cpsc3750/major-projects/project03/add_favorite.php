<?php
session_start();
require 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_SESSION['userID'])) {
        echo json_encode(['status' => 'error', 'message' => 'Please log in to add favorites.']);
        exit();
    }

    $userID = $_SESSION['userID'];
    $gameID = $_POST['game_id'];

    $mysqli = mysqli_connect("eldz2", "kjblinnc_Collecter", "I'mCollectingG@mes", "kjblinnc_collections_app");

    if (mysqli_connect_errno()) {
        echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . mysqli_connect_error()]);
        exit();
    }

    // Check if the game is already in the favorites collection
    $stmt = $mysqli->prepare("SELECT favoriteID FROM Favorites WHERE userID = ? AND gameID = ?");
    $stmt->bind_param("ii", $userID, $gameID);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Game is already in your favorites.']);
    } else {
        $stmt->close();

        $stmt = $mysqli->prepare("INSERT INTO Favorites (userID, gameID) VALUES (?, ?)");
        $stmt->bind_param("ii", $userID, $gameID);

        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Game added to favorites']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to add game to favorites: ' . $stmt->error]);
        }

        $stmt->close();
    }

    mysqli_close($mysqli);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
