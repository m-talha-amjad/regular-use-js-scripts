// Create resize observer
const resizeObserver = new ResizeObserver(entries => {
  // Run code whenever resize happens
  console.log('Browser window resized'); 
});

// Observe window element
resizeObserver.observe(document.documentElement);
