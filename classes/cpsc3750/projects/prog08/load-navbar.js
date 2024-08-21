/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: June 15th, 2024
    Assignment: Prog08 - Common NavBar
*/

// Load the navbar from the navbar.html file
document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});