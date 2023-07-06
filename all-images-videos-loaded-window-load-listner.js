/* Desktop and mobile posters */

  window.addEventListener("load", (event) => {
    let vidPosterDesk = document.querySelector("#shopify-section-{{ section.id }} .vid_poster_desk");
    let vidPosterMobile = document.querySelector("#shopify-section-{{ section.id }} .vid_poster_mobile");
    if (vidPosterDesk) {
      vidPosterDesk.classList.add("hideIt");
    }
    if (vidPosterMobile) {
      vidPosterMobile.classList.add("hideIt");
    }
  });
