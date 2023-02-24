setTimeout(() => {
  // Find the #stamped-reviews-widget element with data-widget-type="single"
    const stampedSingle = document.querySelector('#stamped-reviews-widget[data-widget-type="single"]');

    // Check if the element exists in the DOM
    if (stampedSingle !== null) {

      // Create a new a element
      const newLink = document.createElement("a");

      // Set the href attribute to #stamped-reviews-widget[data-widget-type="carousel"]
      newLink.href = "#stamped-reviews-widget-wrap";

      // Append the #stamped-reviews-widget element to the new a element
      newLink.appendChild(stampedSingle.cloneNode(true));

      // Replace the #stamped-reviews-widget element with the new a element
      stampedSingle.parentNode.replaceChild(newLink, stampedSingle);
    }
    const stampedCarousel = document.querySelector('#stamped-reviews-widget[data-widget-type="carousel"]');

    // Check if the element exists in the DOM
    if (stampedCarousel !== null) {
    
      // Create a new a element
      const newWrap = document.createElement("div");
    
      // Set the href attribute to #stamped-reviews-widget[data-widget-type="carousel"]
      newWrap.id = "stamped-reviews-widget-wrap";
    
      // Append the #stamped-reviews-widget element to the new a element
      newWrap.appendChild(stampedCarousel.cloneNode(true));
    
      // Replace the #stamped-reviews-widget element with the new a element
      stampedCarousel.parentNode.replaceChild(newWrap, stampedCarousel);
    }
}, 5000)
