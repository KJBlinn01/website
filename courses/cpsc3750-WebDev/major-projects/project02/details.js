/*
  Name: Kevin Blinn
  Class: CPSC 3750
  Date Due: July 20th, 2024
  Assignment: Project 02 - Collect App Phase 1
*/

// This function runs when the entire DOM content has been loaded
document.addEventListener('DOMContentLoaded', function() {

    // Parse the URL parameters and Get the 'id' parameter
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('id');

    // Check if a game ID is provided in the URL
    if (gameId) {
      // Fetch and display the details of the specified game
      fetchGameDetails(gameId);
    }
});
  
// Function to fetch and display details of a specific game
function fetchGameDetails(id) {

    // API key for RAWG Video Games Database API
    const apiKey = '02fdad8f60254eea8c8509bf12e6dcde';

    // Construct the API URL with the game ID parameter
    const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  
    // Make an AJAX request to the RAWG API
    $.ajax({
      url: url,
      method: 'GET',
      success: function(response) {

        // Log the response for debugging
        console.log('Game details response:', response);

        // Display the game details
        displayGameDetails(response);
      },
      error: function(xhr, status, error) {

        // Log any errors that occur during the request
        console.error('Error fetching game details:', error);
      }
    });
}
  
// Function to display the details of a specific game on the page
function displayGameDetails(game) {

    // Get the game details container element by its ID
    const detailsContainer = document.getElementById('gameDetails');

    // Set the inner HTML of the details container with the game's information
    detailsContainer.innerHTML = `
      <img src="${game.background_image}" alt="${game.name}" class="game-image">
      <h2>${game.name}</h2>
      <p>${game.description_raw || 'No description available.'}</p>
      <p>Release Date: ${game.released}</p>
      <p>Rating: ${game.rating || 'N/A'}</p>
      <p>Developers: ${game.developers.map(d => d.name).join(', ')}</p>
      <p>Genres: ${game.genres.map(g => g.name).join(', ')}</p>
      <p>Platforms: ${game.platforms.map(p => p.platform.name).join(', ')}</p>`;
}
  