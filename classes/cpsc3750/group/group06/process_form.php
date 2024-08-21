/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 13th, 2024
    Assignment: Group06 - Forms
*/

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Data Display</title>
<link rel="stylesheet" href="group06.css">
</head>
<body>
<header>
    <div id="navbar-placeholder"></div>
</header>

<main>
    <div class="description">
        <h1>Thank you for Submitting!</h1>
        <p>Here are the values you entered:</p>
    </div>

    <hr><br>

    <div class="theForm">
        <?php
        // Display text input
        if (isset($_POST['name'])) {
            echo "<h2>Name:</h2> " . htmlspecialchars($_POST['name']) . "<br>";
        }

        // Display password input
        if (isset($_POST['password'])) {
            echo "<h2>Password:</h2> " . htmlspecialchars($_POST['password']) . "<br>";
        }

        // Display hidden input
        if (isset($_POST['hiddenField'])) {
            echo "<h2>Hidden Data:</h2> " . htmlspecialchars($_POST['hiddenField']) . "<br>";
        }

        // Display textarea input
        if (isset($_POST['feedback'])) {
            echo "<h2>Feedback:</h2> " . nl2br(htmlspecialchars($_POST['feedback'])) . "<br>";
        }

        // Display checkbox array
        if (isset($_POST['interests'])) {
            echo "<h2>Interests:</h2> ";
            foreach ($_POST['interests'] as $interest) {
                echo htmlspecialchars($interest) . " ";
            }
            echo "<br>";
        }

        // Display radio button input
        if (isset($_POST['gender'])) {
            echo "<h2>Gender:</h2> " . htmlspecialchars($_POST['gender']) . "<br>";
        }

        // Display selection list input
        if (isset($_POST['country'])) {
            echo "<h2>Country:</h2> " . htmlspecialchars($_POST['country']) . "<br>";
        }

        // Display file input
        if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
            echo "<h2>File:</h2> " . htmlspecialchars(basename($_FILES['file']['name'])) . "<br>";
        }

        // Display URL input
        if (isset($_POST['website'])) {
            echo "<h2>Website:</h2> " . htmlspecialchars($_POST['website']) . "<br>";
        }
        ?>
    </div>
</main>
</body>
</html>

