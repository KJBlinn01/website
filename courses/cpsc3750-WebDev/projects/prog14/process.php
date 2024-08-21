<?php
// This function checks to see if a number is an Armstrong number
function isArmstrong($num) {
    if ($num < 10) return false; 
    $sum = 0;
    $temp = $num;
    $digits = strlen((string)$num);
    while ($temp != 0) {
        $remainder = $temp % 10;
        $sum += pow($remainder, $digits);
        $temp = floor($temp / 10);
    }
    return $num == $sum;
}

// This function checks to see if a number is a Fibonacci number
function isFibonacci($num) {
    $a = 0;
    $b = 1;
    if ($num == $a || $num == $b) return true;
    $c = $a + $b;
    while ($c <= $num) {
        if ($c == $num) return true;
        $a = $b;
        $b = $c;
        $c = $a + $b;
    }
    return false;
}

// This function checks to see if a number is a prime number
function isPrime($num) {
    if ($num < 2) return false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) return false;
    }
    return true;
}

// This function checks to see if a number is neither prime, Armstrong, nor Fibonacci
function isNone($num) {
    return !isPrime($num) && !isArmstrong($num) && !isFibonacci($num);
}

// This function adds a number to a file
function addToFile($filename, $num) {
    $current = file_get_contents($filename);
    $current .= $num . "\n";
    file_put_contents($filename, $current);
}

// Check if this is the user's first visit, if so, create the new .txt files
if (!isset($_COOKIE['visited'])) {
    file_put_contents('armstrong.txt', '');
    file_put_contents('fibonacci.txt', '');
    file_put_contents('prime.txt', '');
    file_put_contents('none.txt', '');
    
    // Set a cookie that lasts 24hrs
    setcookie('visited', 'true', time() + 86400, "/"); 
}

// Check if the user has submitted a form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // If the user clicks reset, delete all 4 files and clear the cookies
    if (isset($_POST['reset'])) {
        unlink('armstrong.txt');
        unlink('fibonacci.txt');
        unlink('prime.txt');
        unlink('none.txt');
        setcookie('visited', '', time() - 3600, "/");
        header("Location: ../public/index.html");
        exit();
    }

    // If the user submits a number, check if it is Armstrong, Fibonacci, Prime, or None
    if (isset($_POST['numbers'])) {
        $numbers = explode(',', $_POST['numbers']);
        foreach ($numbers as $num) {
            $num = trim($num);
            if (is_numeric($num)) {
                if (isArmstrong($num)) {
                    addToFile('armstrong.txt', $num);
                } elseif (isFibonacci($num)) {
                    addToFile('fibonacci.txt', $num);
                } elseif (isPrime($num)) {
                    addToFile('prime.txt', $num);
                } else {
                    addToFile('none.txt', $num);
                }
            }
        }
        header("Location: ../public/index.html");
        exit();
    }
}

// If the user clicks a view button, display the content of the correct file
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['view'])) {
    // This function displays the content of a file
    function showNumbers($filename) {
        if (file_exists($filename)) {
            $content = file_get_contents($filename);
            echo "<div class='display'><strong>" . strtoupper($filename) . ":</strong><br>" . nl2br($content) . "</div>";
        } else {
            echo "<div class='display'><strong>" . strtoupper($filename) . ":</strong> Content File Empty! </div>";
        }
    }

    // Create the Display page for the user
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <title>Number Checker Results</title>
        <script src='../../load-navbar.js' defer></script>
        <link href='../../navStyle.css' rel='stylesheet' type='text/css'>
        <link rel='stylesheet' href='../public/prog14.css'>
    </head>
    <body>
        <h1>Number Checker Results</h1>";
    
    // Display the content of the file based on the view button clicked
    $view = $_GET['view'];
    switch ($view) {
        case 'armstrong':
            showNumbers('armstrong.txt');
            break;
        case 'fibonacci':
            showNumbers('fibonacci.txt');
            break;
        case 'prime':
            showNumbers('prime.txt');
            break;
        case 'none':
            showNumbers('none.txt');
            break;
    }

    echo "<a href='../public/index.html' class='back-button'>Back</a>
    </body>
    </html>";
}
?>
