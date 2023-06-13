document.addEventListener('DOMContentLoaded', function() {
  var colorInputs = document.querySelectorAll('.product-form__input.color input[name="Color"]');
  var selectedColorElement = document.querySelector('.product-form__input.color .selected-color');
  
  for (var i = 0; i < colorInputs.length; i++) {
    colorInputs[i].addEventListener('change', handleColorChange);
    
    if (colorInputs[i].checked) {
      var colorValue = colorInputs[i].value;
      if (selectedColorElement) {
        selectedColorElement.textContent = colorValue;
      }
    }
  }
  
  function handleColorChange(event) {
    var colorValue = event.target.value;
    
    // Check if any other input is checked
    var otherInputs = document.querySelectorAll('.product-form__input.color input[name="Color"]:checked');
    var isOtherChecked = otherInputs.length > 1;
    
    // Update the .selected-color selector with the color value
    if (selectedColorElement) {
      selectedColorElement.textContent = colorValue;
    }
    
    // Do something with the colorValue and isOtherChecked
    console.log(colorValue);
    console.log(isOtherChecked);
    
    // Additional code...
  }
});
