const submitBtn = document.querySelector('.product-form__submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // disable default button behavior
  
  window.location.href = '/pages/contact'; 
});


// Get all submit buttons
const submitBtns = document.querySelectorAll('.product-form__submit');

// Loop through each one 
submitBtns.forEach(function(btn) {

  // Attach listener
  btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    window.location.href = '/pages/contact';
    
  });
  
});
