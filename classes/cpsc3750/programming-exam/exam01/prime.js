// Name: Kevin Blinn
// Date: June 15th 2024
// Course: CPSC 3750
// Assignment: Programming Exam 01 
// Grade Level: A

// Add event listener to the form so Enter key will trigger the sort
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getNumbers();
    }
});

// Lists of prime numbers and non-prime numbers
let primeNumbers = [];
let nonPrimeNumbers = [];


// Get the prime numbers and non-prime numbers
function getNumbers() {
    // Get the number from the text field
    let number = document.getElementById("numberEntered").value;

    for (let i = 1; i <= number; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // Add the number to the appropriate list
        if (isPrime) {
            primeNumbers.push(i);
        } else {
            nonPrimeNumbers.push(i);
        }
    }

    // Display the prime numbers and non-prime numbers
    document.getElementById("primeNumbers").innerHTML = primeNumbers.join(", ");
    document.getElementById("nonPrimeNumbers").innerHTML = nonPrimeNumbers.join(", ");
}

// Get the sum of the prime numbers
function primeSum() {
    let primeSum = 0;

    for (let i = 0; i < primeNumbers.length; i++) {
        primeSum += primeNumbers[i];
    }

    document.getElementById("primeSum").innerHTML = ("Prime Numbers Sum: " + primeSum);
}

// Get the sum of the non-prime numbers
function nonPrimeSum() {
    let nonPrimeSum = 0;

    for (let i = 0; i < nonPrimeNumbers.length; i++) {
        nonPrimeSum += nonPrimeNumbers[i];
    }

    document.getElementById("nonPrimeSum").innerHTML = ("Non-Prime Numbers Sum: " + nonPrimeSum);

}

// Clear the prime numbers and non-prime numbers
function clearNumbers() {
    primeNumbers = [];
    nonPrimeNumbers = [];
    document.getElementById("primeNumbers").innerHTML = "";
    document.getElementById("nonPrimeNumbers").innerHTML = "";
}

// Function to change the background color of the lists every 5 seconds
function changeColor() {

    var colors = ["red", "blue", "green", "pink", "purple", "orange", "white"];
    var i = 0;

    setInterval(function() {
        document.getElementById("primeList").style.backgroundColor = colors[i];
        document.getElementById("nonPrimeList").style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 5000);
}

window.onload = changeColor;


