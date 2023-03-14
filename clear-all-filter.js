// <button class="clear-all" data-drawer-id="clear-all-filter" aria-label="clear all filters">
//      CLear All
//  </button>  

{

let clearBtn = document.querySelector('.clear-all[data-drawer-id="clear-all-filter"]');

// Add a click event listener to the clear button
clearBtn.addEventListener('click', function() {
  // Remove the query string from the URL
  history.replaceState(null, null, window.location.pathname);

  // Uncheck any radio buttons with the "Linklist__Checkbox" class
  var checkboxes = document.querySelectorAll('.Linklist__Checkbox[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
});
  
}
 // first part 

function handleFilterSelection(event) {
  var clickedElement = event.target;

  if (clickedElement.classList.contains('clear-all')) {
    // Clear all filters and reload products with AJAX
    var url = new URL(window.location.href);
    history.replaceState(null, null, window.location.pathname);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url.toString(), true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;
        var parser = new DOMParser();
        var doc = parser.parseFromString(response, 'text/html');
        var productGrid = doc.querySelector('.product-grid');
        var filters = doc.querySelector('.filters');
        var pagination = doc.querySelector('.pagination');

        document.querySelector('.product-grid').innerHTML = productGrid.innerHTML;
        document.querySelector('.filters').innerHTML = filters.innerHTML;
        document.querySelector('.pagination').innerHTML = pagination.innerHTML;
      }
    };
    xhr.send();

    // Uncheck any radio buttons with the "Linklist__Checkbox" class
    var checkboxes = document.querySelectorAll('.Linklist__Checkbox input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  } else {
    // Handle other filter selections and filtering of products
    // ...
  }
}
 // In this example, we've added an if statement to check if the clicked element has the "clear-all" class. If it does, we first clear all filters and update the URL using history.replaceState(), then we send an AJAX request to the current URL using XMLHttpRequest(). We set the X-Requested-With header to XMLHttpRequest to indicate that it's an AJAX request.

 // In the onload event of the AJAX request, we get the response text and parse it into a new DOM document using DOMParser(). We then extract the updated product grid, filters, and pagination elements from the response document, and replace the existing elements on the page with them.

 // Finally, we uncheck any radio buttons with the "Linklist__Checkbox" class, as before.

 // Note that this is just an example, and you may need to modify the code to fit your specific use case.
