// Dawn 5.0
//https://nanajacqueline.com/products/diana-dress-pink

// Get all the radio buttons with the name "Color"
const colorRadios = document.querySelectorAll('input[name="Color"]');

// Get the initially checked radio input
const initiallyCheckedRadio = document.querySelector('input[name="Color"]:checked');

// Get the .selected-color element
const selectedColorElement = document.querySelector('.selected-color');

// Function to update the text in .selected-color
function updateSelectedColorText() {
  selectedColorElement.textContent = initiallyCheckedRadio.value;
}

// Add a change event listener to all color radio buttons
colorRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    selectedColorElement.textContent = radio.value;
  });
});

// Initial text setup
updateSelectedColorText();
