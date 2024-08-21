/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 13th, 2024
    Assignment: Prog13 - AJAX & Handlebars
*/

// Initialize a counter to keep track of the current page
var pageCounter = 1;

// Get references to the animal info container and the button
var animalInfoContainer = document.getElementById("animal-info");
var fetchButton = document.getElementById("fetch-button");

// Add a click event listener to the button
fetchButton.addEventListener("click", function() {

  // Create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  
  // Initialize a GET request with the URL containing the current page number
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  
  // Define what happens when the request is successfully completed
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      // Parse the JSON response
      var data = JSON.parse(request.responseText);
      
      // Render the HTML using the parsed data
      renderHTML(data);
    } 
    else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  // Define what happens in case of an error
  request.onerror = function() {
    console.log("Connection error");
  };

  // Send the request
  request.send();
  
  // Increment the page counter
  pageCounter++;
  
  // Hide the button if there are no more pages to fetch
  if (pageCounter > 3) {
    fetchButton.classList.add("hide-me");
  }
});

// Function to render the HTML using Handlebars
function renderHTML(data) {
  // Get the Handlebars template from the HTML
  var source = document.getElementById("animal-template").innerHTML;
  
  // Compile the template
  var template = Handlebars.compile(source);
  
  // Generate the HTML by passing the data to the template
  var htmlString = template(data);
  
  // Insert the generated HTML into the container
  animalInfoContainer.insertAdjacentHTML('beforeend', htmlString);
}