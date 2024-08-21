/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: June 1st, 2024
    Assignment: Prog04 - JavaScript Events
*/

// Declare variables for the button clicks
let redClicks = 0;
let greenClicks = 0;
let blueClicks = 0;

// Function to change the background color to red and increment clicks counter
function redFunc() {
    document.body.style.backgroundColor = 'red';
    redClicks++;
    document.getElementById('redCount').innerHTML = 'RED Times Clicked: ' + redClicks;
}

// Function to change the background color to green and increment click counter
function greenFunc() {
    document.body.style.backgroundColor = 'green';
    greenClicks++;
    document.getElementById('greenCount').innerHTML = 'GREEN Times Clicked: ' + greenClicks;
}

// Function to change the background color to blue and increment click counter
function blueFunc() {
    document.body.style.backgroundColor = 'blue';
    blueClicks++;
    document.getElementById('blueCount').innerHTML = 'BLUE Times Clicked: ' + blueClicks;
}

// Declare variables for the buttons
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");

// Declare variables for the mouseover events counter
let redChangeCount = 0;
let greenChangeCount = 0;
let blueChangeCount = 0;

// Function to increment the counter for red mouseover events
function colorCountRed() {
    redChangeCount++;
    document.getElementById("redChange").innerText = "Times RED Changes Colors: " + redChangeCount;
}

// Function to increment the counter for green mouseover events
function colorCountGreen() {
    greenChangeCount++;
    document.getElementById("greenChange").innerText = "Times GREEN Changes Colors: " + greenChangeCount;
}

// Function to increment the counter for blue mouseover events
function colorCountBlue() {
    blueChangeCount++;
    document.getElementById("blueChange").innerText = "Times BLUE Changes Colors: " + blueChangeCount;
}




