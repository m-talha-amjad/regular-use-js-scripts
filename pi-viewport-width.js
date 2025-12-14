(function () {
  function setViewportWidth() {
    const viewportWidth = document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      '--pi-viewport-width',
      viewportWidth + 'px'
    );
  }

  // Initial run
  setViewportWidth();

  // Update on resize / orientation change
  window.addEventListener('resize', setViewportWidth);
})();
