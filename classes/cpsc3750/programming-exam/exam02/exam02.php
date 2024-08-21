<?php
// Read the file and store the words in an array
$words = file('words.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

// Initialize the array to store the words by the number of vowels
$vowelCounts = [];

// Define the vowels that will be used to check the words
$vowels = ['a', 'e', 'i', 'o', 'u'];

// Go over each word and count the vowels
foreach ($words as $word) {

    // Initialize the count of vowels for the current word
    $count = 0;

    // Convert the word to lowercase
    $currentWord = strtolower($word);

    // Go over each character in the word and check if it is a vowel
    foreach (str_split($currentWord) as $char) {

        // If the character is a vowel, increment the count
        if (in_array($char, $vowels)) {
            $count++;
        }
    }

    // Store the word in the array based on the number of vowels
    $vowelCounts[$count][] = $word;
}

// Sort the array by the number of vowels (Found on w3schools)
ksort($vowelCounts);

// Output the array as JSON
header('Content-Type: application/json');
echo json_encode($vowelCounts);
?>


