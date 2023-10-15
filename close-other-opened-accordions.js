 // uniformers.pk
// Dawn 9.0

 document.querySelectorAll('.accordion summary').forEach((summary) => {
  summary.addEventListener('click', (event) => {
    const currentAccordion = event.currentTarget.closest('.accordion');
    if (currentAccordion) {
      document.querySelectorAll('.accordion').forEach((accordion) => {
        if (accordion !== currentAccordion) {
          // Close other accordions
          accordion.querySelector('details').removeAttribute('open');
          accordion.querySelector('summary').setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
});
