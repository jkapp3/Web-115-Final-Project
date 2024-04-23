function generateNewPage() {
    // Create a new HTML document
    var newPage = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>New Webpage</title></head><body><h1>This is a New Webpage</h1><p>This webpage was generated dynamically.</p></body></html>";
    
    // Open the new HTML document in a new window or tab
    var newWindow = window.open();
    newWindow.document.write(newPage);
}

// Function to handle the click event
function handleClick() {
    // Call the generateNewPage function when the button is clicked
    generateNewPage();

    // Additional code you want to execute when the button is clicked
    document.write("Monday  Tuesday   Wednesday   Thursday   Friday   Saturday   Sunday",
                  "---------------------------------------------------------------------" );
}