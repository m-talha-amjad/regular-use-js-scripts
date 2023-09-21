  const loadMoreButton = document.getElementById('view-more-button');
  try {
      // Store the URL for the next page
      const nextUrl = '/collections/all?page=2';

      // Fetch the next page in the background
      const response = await fetch(nextUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseHTML = await response.text();
      const responseDoc = new DOMParser().parseFromString(responseHTML, 'text/html');

      // Find the product grid in the response
      const responseGrid = responseDoc.getElementById('product-grid');

      // Append the products from the next page to the existing grid
      if (responseGrid) {
        const grid = document.getElementById('product-grid');
        const newProducts = responseGrid.querySelectorAll('.product-item');
        newProducts.forEach(function (product) {
          grid.appendChild(product);
          product.style.opacity = 1;
        });

        // Update the URL for the next page of products
        nextPageUrl = responseGrid.getAttribute('data-next-page-url');
        loadMoreButton.setAttribute("href", nextPageUrl);
      }
    } catch (error) {
      console.error('Error fetching and appending products:', error);
    }
