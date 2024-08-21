/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: June 8th, 2024
    Assignment: Prog07 - JavaScript Sort
*/

// Add event listener to the form so Enter key will trigger the sort
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        SortNames();
    }
});

// initialize the counter and the array
var numbernames=0;
var names = new Array();

function SortNames() {
   // Get the name from the text field and convert it to uppercase
   thename=document.theform.newname.value.toUpperCase();

   // Add the name to the array
   names[numbernames]=thename;

   // Increment the counter
   numbernames++;

   // Sort the array
   names.sort();

   // Add the numbers to the names
   var numberedNames = new Array();
   for (var i = 0; i < names.length; i++) { 
    numberedNames[i] = (i + 1) + ". " + names[i]; 
   }
   
   document.theform.sorted.value=numberedNames.join("\n");
}
