

// Get all product cards
const products = document.querySelectorAll('.ProductItem');

// Loop through each product 
products.forEach(product => {

  // Get radio buttons in this product
  const radios = product.querySelectorAll('.ColorSwatch__Radio');

  // Add click handler to each radio
  radios.forEach(radio => {

    radio.addEventListener('click', () => {

      // Check if standard radio
      if(radio.closest('.ProductItem__ColorSwatchItem:not(.custom-swatch)')) {

        // Show standard labels in this product 
        product.querySelectorAll('.ProductItem__Label:not(.custom-swatch-label)').forEach(label => {
          label.hidden = false;
        });
        // Show standard labels in this product 
        product.querySelectorAll('.ProductItem__Label.custom-swatch-label').forEach(label => {
            label.hidden = true;
          });

      } else {

        // Is custom radio
        const radioSwatch = radio.dataset.swatch;

        // Get custom labels in this product
        const labels = product.querySelectorAll('.ProductItem__Label.custom-swatch-label');
        product.querySelectorAll('.ProductItem__Label:not(.custom-swatch-label)').forEach(label => {
            label.hidden = true;
          });
        // Show match, hide non-matches
        labels.forEach(label => {
          if(label.dataset.swatch === radioSwatch) {
            label.hidden = false;
          } else {
            label.hidden = true;  
          }
        });

      }

    });

  });

});
