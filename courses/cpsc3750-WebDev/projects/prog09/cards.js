/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: June 15th, 2024
    Assignment: Prog09 - Card Object
*/

// define the functions
function printCard() {
    var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
    var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
    var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
    var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";

    // Add a birthday line
    var birthdateLine = "<strong>Birthday: </strong>" + this.birthdate + "<hr>";

    return nameLine + emailLine + addressLine + phoneLine + birthdateLine;
 }
 
 function Card(name,email,address,phone,birthdate) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;

    // Add a birthday property to the Card object
    this.birthdate = birthdate;

    this.printCard = printCard;
 }

// Create an array to hold the cards
var cards = new Array();

// Create the objects
var sue = new Card("Sue Suthers", "sue@suthers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876", "01/01/1970");
var fred = new Card("Fred Fanboy", "fred@fanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-4444", "02/02/1971");
var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344",  "03/03/1972");

cards.push(sue);
cards.push(fred);
cards.push(jimbo);


// Function that adds a new card to the array
function addCard() {

    // Collect the data for the new card
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var birthdate = document.getElementById("birthdate").value;

    // Create the new card and add it to the array
    var addCard = new Card(name, email, address, phone, birthdate);
    cards.push(addCard);

    // Display the card as it gets added
    var cardDiv = document.getElementById("cards");
    cardDiv.innerHTML += addCard.printCard();

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("birthdate").value = "";

}

// Loop through the array and display each card
function displayCards() {
    var cardDiv = document.getElementById("cards");
    cardDiv.innerHTML = "";
    for (var i = 0; i < cards.length; i++) {
        cardDiv.innerHTML += cards[i].printCard();
    }
}





