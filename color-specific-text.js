document.addEventListener("DOMContentLoaded", function () {
// Get all elements with the class '.menu-link'
const menuLinkElements = document.querySelectorAll('.link-list .menu-link');

// Loop through each '.menu-link' element
menuLinkElements.forEach(menuLinkElement => {
  // Find the innermost span within each '.menu-link'
  const spanElement = menuLinkElement.querySelector('span > span');
  
  // Check if the text content of the innermost span is 'Sale'
  if (spanElement && spanElement.textContent.trim() === 'Sale') {
    // If it contains 'Sale', add the 'red-text' class to the current '.menu-link' element
    menuLinkElement.classList.add('red-text');
  }
});
});
