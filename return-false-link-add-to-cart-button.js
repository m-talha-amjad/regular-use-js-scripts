const submitBtn = document.querySelector('.product-form__submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // disable default button behavior
  
  window.location.href = '/pages/contact'; 
});


  // Get all submit buttons
  const submitBtns = document.querySelectorAll('.quick-add__submit');
  if (submitBtns.length > 0) {
    // Loop through each one 
    submitBtns.forEach(function(btn) {
    
      // Attach listener
      btn.addEventListener('click', (e) => {
        
        e.preventDefault();
        
        window.location.href = '/pages/contact';
        
      });
      
    });
  } else {
  // no submit buttons found
}


// Select by data attribute
const submitBtns = document.querySelectorAll('[data-cart-btn-override="true"]'); 

if (submitBtns.length > 0) {

  submitBtns.forEach(function(btn) {

    // Make button accessible 
    btn.setAttribute('role', 'link');
    btn.setAttribute('tabindex', '0');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      window.location.href = '/pages/contact'; 
    });

  });

} else {
  // no buttons found
}
