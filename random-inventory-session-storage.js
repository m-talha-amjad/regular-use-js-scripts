

        // Get the first product element
var productElement = document.querySelector('.product-section');

// Get the product ID from the data-product-id attribute
var productId = productElement.getAttribute('data-product-id');

// Check if the product has been visited before
if (sessionStorage.getItem(productId)) {
  // Retrieve the previously assigned number
  var assignedNumber = parseInt(sessionStorage.getItem(productId));

  // Decrease the assigned number by 1
  assignedNumber--;
// Get the element with the "custom-inventory" class
var inventoryElement = document.querySelector('.custom-inventory');

// Get the current text content of the element
var originalText = inventoryElement.textContent;

// Extract the number from the original text using regular expressions
var numberRegex = /\d+/;
var originalNumber = originalText.match(numberRegex)[0];
// Replace the original number with the random number in the text
var updatedText = originalText.replace(originalNumber, assignedNumber);

// Update the text content of the element with the updated text
inventoryElement.textContent = updatedText;

  // Update the assigned number in sessionStorage
  sessionStorage.setItem(productId, assignedNumber.toString());
} else {

// Get the element with the "custom-inventory" class
var inventoryElement = document.querySelector('.custom-inventory');

// Get the current text content of the element
var originalText = inventoryElement.textContent;

// Extract the number from the original text using regular expressions
var numberRegex = /\d+/;
var originalNumber = originalText.match(numberRegex)[0];

// Generate a random number between 3 and 20
var randomNumber = Math.floor(Math.random() * (20 - 3 + 1) + 3);

// Replace the original number with the random number in the text
var updatedText = originalText.replace(originalNumber, randomNumber);

// Update the text content of the element with the updated text
inventoryElement.textContent = updatedText;

  sessionStorage.setItem(productId, randomNumber.toString());
}



