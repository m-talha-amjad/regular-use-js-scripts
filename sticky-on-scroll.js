// Used in Prestige theme 5.7.1
  document.documentElement.style.setProperty('--header-height', document.getElementById('shopify-section-header').offsetHeight + 'px');
  if (window.matchMedia('screen and (min-width: 1150px)').matches) {
      window.onscroll = function() {myFunction()};
  }

  let headerWrapper = document.getElementById("header-wrapper");
  let headerStickyWrapper = document.getElementById("header-sticky-wrapper");
  let noStickyLogo = document.getElementById("non-sticky-logo");
  let noStickyCartSearch = document.getElementById("non-sticky-cart-search");
  let stickyCartSearch = document.getElementById("sticky-cart-serach");
  let stickyLogo = document.getElementById("sticky-logo");
  let navbar = document.getElementById("header-main-nav");
  
  let sticky = navbar.offsetTop - 30;
  console.log(sticky +"testing");
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      headerWrapper.classList.add("at-sticky");
      headerStickyWrapper.classList.add("sticky");
      stickyLogo.classList.add("sticky");
      stickyCartSearch.classList.add("sticky");
      
      noStickyLogo.classList.add("at-sticky");
      noStickyCartSearch.classList.add("at-sticky");
      
    } else {
      headerWrapper.classList.remove("at-sticky");
      headerStickyWrapper.classList.remove("sticky");
      stickyLogo.classList.remove("sticky");
      stickyCartSearch.classList.remove("sticky");
      
      noStickyLogo.classList.remove("at-sticky");
      noStickyCartSearch.classList.remove("at-sticky");
    }
  }
