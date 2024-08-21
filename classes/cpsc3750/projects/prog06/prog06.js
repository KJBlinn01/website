/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: June 8th, 2024
    Assignment: Prog06 - Move Buttons
*/

// Get the HTML elements
var selectColor = document.getElementById("selectColor");
var make = document.getElementById("make");
var move = document.getElementById("move");
var sum = document.getElementById("sum");
var area = document.getElementById("area");

// Variables needed for the events
let total = 0;
let isMoving = false;
let buttons = [];

/* Event listener for the make button

   This event listener creates a new button with the color selected from the
    selectColor dropdown and assign it with a random number. It also adds an 
    event listener to the new button that will increment the total by the value 
    of the button when clicked.
*/
make.addEventListener("click", function() {
    // Get the color value of the button
    let color = selectColor.value;
    let button = document.createElement("button");

    // Generate a random value of the button
    let randomValue = Math.floor(Math.random() * 100) + 1;
    button.textContent = randomValue;

    // Set the background color of the button
    button.style.backgroundColor = color;

    // Set the width and height of the button
    button.style.width = "50px";
    button.style.height = "25px";

    // Get the max width and height of the viewing area for the buttons
    let maxWidth = area.clientWidth - button.clientWidth;
    let maxHeight = area.clientHeight - button.clientHeight;

    // Add button to a random location on the viewing area
    button.style.position = "absolute";
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

    // Chnage background color and update total when button is clicked
    button.addEventListener("click", function() {
        button.style.backgroundColor = selectColor.value;
        let buttonValue = parseInt(button.textContent);
        total += buttonValue;
        sum.textContent = "Running Sum: " + total;
    });

    // Add button to the viewing area and the buttons array
    area.appendChild(button);
    buttons.push(button);
});


/* Event listener for the move button

    This event listener will PAUSE or MOVE the buttons. If the buttons are 
    moving it will stop them, if they are stopped it will call the moveButtons.
*/
move.addEventListener("click", function() {
    isMoving = !isMoving;
    if (isMoving) {
        move.textContent = "PAUSE";
        moveButtons();
    } else {
        move.textContent = "MOVE";
    }
});


/* moveButtons
    
    This function will move the buttons on the screen. It will move them in a 
    random direction and speed. The buttons will move until they hit the side 
    edges of the area. When a button hits the edge it will change 
    direction and continue moving.
*/
function moveButtons() {
    if (!isMoving){
        return;
    }

    // Get the max width and height of the viewing area for the buttons
    let maxWidth = area.clientWidth;
    let maxHeight = area.clientHeight;

    // Get a random direction and then continue moving the button 
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        let x = parseInt(button.style.left);
        let y = parseInt(button.style.top);

        // Get a random direction for the button
        let directionX = Math.floor(Math.random() * 3) - 1;
        let directionY = Math.floor(Math.random() * 3) - 1;
        

        // Set the speed for each button to 2 pixels per frame
        let speed = 2;

        // Move the button in the random direction and speed
        x += directionX * speed;
        y += directionY * speed;

        // If the button hits the side of the viewing area change direction
        if (x < 0 || x > maxWidth - button.clientWidth) {
            directionX *= -1;
            x += directionX * speed;
        }
        if (y < 0 || y > maxHeight - button.clientHeight) {
            directionY *= -1;
            y += directionY * speed;
        }

        // Update the button location
        button.style.left = x + "px";
        button.style.top = y + "px";
    }

    // Call moveButtons again
    requestAnimationFrame(moveButtons);
}


