/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 13th, 2024
    Assignment: Prog12 - AJAX & PHP
*/

// This function sends a request to search.php with the user input
function showResults(query) {

    // Check if the query is empty and display the default message if so
    if (query.length == 0) {
        document.getElementById('list').innerHTML = '<li>Capitals will display when you type a state...</li>';
        return;
    }

    // Send the request to search.php with the query
    ajaxRequest('search.php?query=' + query, displayResults);
}

// This function will update the list based on the response
function displayResults(responseXML) {

    // Get the list element and clear it
    var list = document.getElementById('list');
    list.innerHTML = '';

    // Get the names from the response and add them to the list
    var names = responseXML.getElementsByTagName('name');
    for (var i = 0; i < names.length; i++) {
        var li = document.createElement('li');
        li.textContent = names[i].textContent;
        list.appendChild(li);
    }
}
