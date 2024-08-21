/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 6th, 2024
    Assignment: Group05 - Hangman
    Grade Version: B
*/

// Variables for the game
let selectedWord = '';
let attemptsLeft = 10;
let guessedLetters = Array(selectedWord.length).fill('_');
let gameEnded = false;
let lettersGuessed = [];

// GRADE TIER D: If cheatMode is checked then the word is displayed as an alert
function cheatMode() {
  var displayWord = document.getElementById('displayWord');
  if (document.getElementById('cheatMode').checked) {
    alert('Cheat Mode Active! The word is ' + selectedWord);
    displayWord.innerText = "The word is: " + selectedWord;
    displayWord.style.display = "block";
  }
  else {
    displayWord.style.display = "none";
  }
}


// GRADE TIER B: Fetch a new word from the server
function startGame() {
  // Fetch a new word from the server
  fetch('getWord.php')
      .then(response => response.json())
      .then(data => {
          if(data.word) {
              setupGame(data.word);
          } else {
              console.error('Error fetching word:', data.error);
          }
      })
      .catch(error => console.error('Error:', error));
}

function setupGame(word) {
  // After getting the word, setup the game
  selectedWord = word.toLowerCase();
  attemptsLeft = 10;
  guessedLetters = Array(selectedWord.length).fill('_');
  gameEnded = false;
  lettersGuessed = [];
  
  // Show how many attempts the player has left and what they guessed
  document.getElementById('attemptsLeft').innerText = `Attempts Left: ${attemptsLeft}`;
  document.getElementById('guesses').innerText = `Guesses: ${lettersGuessed.join(', ')}`;

  // Check if the game is in Cheat Mode
  if (document.getElementById('cheatMode').checked) {
    document.getElementById('cheatMode').checked = false;
    cheatMode();
  }

  // Update the word display and display the letters
  updateWordDisplay();
  displayLetters();
}

function guessLetter(letter) {
  if (gameEnded) return;

  // Add the Guess letter to Guesses
  lettersGuessed.push(letter);
  updateGuesses();

  let guess = letter.toLowerCase();

  // Check if the guess is in the word and update the word display
  if (guess && !gameEnded) {
    if (selectedWord.includes(guess)) {
      selectedWord.split('').forEach((l, index) => {
        if (l === guess) {
          guessedLetters[index] = guess;
        }
      });

      updateWordDisplay();
      
      // Check if the player won the game and display the winning message
      if (!guessedLetters.includes('_')) {
        document.getElementById('status').innerText = 'Congratulations! You won!';
        gameEnded = true;
        alert('Congratulations! You won!');
      }
    }
    // If the guess is not in the word, decrement the attempts left 
    else {
      attemptsLeft--;
      document.getElementById('attemptsLeft').innerText = `Attempts Left: ${attemptsLeft}`;

      // If the player has no attempts left, display the losing message
      if (attemptsLeft == 0) {
        document.getElementById('status').innerText = 'Game Over! You lost.';
        gameEnded = true;
      }
    }
  }
}

// GRADE TIER C: Display letters in a 5x6 grid
function displayLetters() {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lettersDiv = document.getElementById('letterGrid');
  lettersDiv.innerHTML = ''; 
  letters.split('').forEach(letter => {
    let button = document.createElement('button');
       button.textContent = letter;
       button.onclick = () => guessLetter(letter);
       lettersDiv.appendChild(button);
   });
}

// This function helps the user see what they guessed already
function updateGuesses() {
  document.getElementById('guesses').innerText = `Guesses: ${lettersGuessed.join(', ')}`;
}

// This function updates the word display
function updateWordDisplay() {
  document.getElementById('wordToGuess').innerText = guessedLetters.join(' ');
}

startGame();

