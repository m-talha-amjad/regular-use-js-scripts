
  {
  // Select the cart-icon-bubble element
  const cartIconBubble = document.getElementById('cart-icon-bubble');
  const cartDrawer = document.querySelector('cart-drawer.drawer');

  let hoverStartTime;
  let hoverInterval;

  cartIconBubble.addEventListener('mouseenter', function() {
    // Record the start time when the mouse enters
    hoverStartTime = Date.now();
    // Clear any existing hoverInterval
    clearInterval(hoverInterval);
    // Start a new interval for hover duration check
    hoverInterval = setInterval(checkHoverDuration, 100);
  });

  cartIconBubble.addEventListener('mouseleave', function() {
    // Clear the hoverInterval and reset the hover start time when the mouse leaves
    clearInterval(hoverInterval);
    hoverStartTime = null;
  });

  function checkHoverDuration() {
    if (!cartDrawer.classList.contains('active') && Date.now() - hoverStartTime >= 500) {
      // Element has been hovered for one second and cart-drawer is not active
      cartDrawer.classList.add('active');
      // Clear the hoverInterval as the hover duration check is no longer needed
      clearInterval(hoverInterval);
      // Add your desired code or actions here
    }
  }

  }
