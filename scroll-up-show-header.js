// https://www.minilabsters.com/ Booster 6.1
// Select the header elements
const desktopHeader = document.querySelector('.page__header--desktop');  
const mobileHeader = document.querySelector('.page__header--mobile');

let lastScrollY = window.pageYOffset; 

window.addEventListener('scroll', () => {

  if(window.pageYOffset < 75) {
    desktopHeader.classList.remove('header-fixed');
    mobileHeader.classList.remove('header-fixed');

  } else {

    if (lastScrollY < window.pageYOffset) {  
      desktopHeader.classList.remove('header-fixed');
      mobileHeader.classList.remove('header-fixed');
    
    } else {
      desktopHeader.classList.add('header-fixed');
      mobileHeader.classList.add('header-fixed');
    }

  }

  lastScrollY = window.pageYOffset;  
});
