/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 27th, 2024
    Assignment: Prog15 - Integrate with DB
*/

document.addEventListener('DOMContentLoaded', () => {

    // Get references to the form elements
    const insertForm = document.getElementById('insertForm');
    const searchForm = document.getElementById('searchForm');
    const insertMessage = document.getElementById('insertMessage');
    const searchResults = document.getElementById('searchResults');

    // Add event listener to the insert form
    insertForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(insertForm);

        fetch('insert.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            insertMessage.innerHTML = data;
            insertForm.reset();
        });
    });

    // Add event listener to the search form
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(searchForm);
        const params = new URLSearchParams(formData);

        fetch(`search.php?${params.toString()}`)
        .then(response => response.text())
        .then(data => {
            searchResults.innerHTML = data;
        });
    });
});
