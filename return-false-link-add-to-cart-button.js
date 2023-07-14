const submitBtn = document.querySelector('.product-form__submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // disable default button behavior
  
  window.location.href = '/pages/contact'; 
});
