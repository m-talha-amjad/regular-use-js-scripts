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


// if siblings are the detail element use this 

 document.querySelectorAll('.collection-sidebar__wrapper .collection-sidebar__filter-group summary').forEach((summary) => {
    summary.addEventListener('click', (event) => {
        const currentAccordion = event.currentTarget.closest('.collection-sidebar__filter-group');
        if (currentAccordion) {
        document.querySelectorAll('.collection-sidebar__filter-group').forEach((accordion) => {
            if (accordion !== currentAccordion) {
            // Close other accordions
            accordion.removeAttribute('open');
            // accordion.querySelector('summary').setAttribute('aria-expanded', 'false');
            }
        });
        }
    });
    });
