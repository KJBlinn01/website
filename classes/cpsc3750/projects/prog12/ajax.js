// global variables to keep track of the request
// and the function to call when done
var ajaxreq = false, ajaxCallback;

// ajaxRequest: Sets up a request
function ajaxRequest(filename, callback) {
    
  // Create a new request
  try {
        ajaxreq = new XMLHttpRequest();
    } catch (error) {
        return false;
    }

    // Set up the request
    ajaxCallback = callback;

    // Set up to handle the response
    ajaxreq.open("GET", filename);
    ajaxreq.onreadystatechange = ajaxResponse;

    // Send the request
    ajaxreq.send(null);
}

// ajaxResponse: Waits for response and calls a function
function ajaxResponse() {

    // Wait until the request is complete
    if (ajaxreq.readyState != 4) return;

    // If the request succeeded, call the callback
    if (ajaxreq.status == 200) {
        // if the request succeeded...
        if (ajaxCallback) ajaxCallback(ajaxreq.responseXML);
    } 
    else alert("Request failed: " + ajaxreq.statusText);
    
    return true;
}
