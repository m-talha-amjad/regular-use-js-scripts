//  .grid__item .card>.card__content .card__heading {
//   min-height: var(--pi-max-height-title);
// }
// .grid__item .card>.card__content .card__information {
//   min-height: var(--pi-max-height-card__information);
// }


 var facetsWrapper = document.querySelector("facet-filters-form.facets+.facets-vertical");

  var card__heading = document.querySelectorAll(".grid__item .card>.card__content .card__heading");

  var card__heading_max_height = 0;

  for (var i = 0; i < card__heading.length; i++) {
    card__heading_max_height = Math.max(card__heading_max_height, card__heading[i].offsetHeight);
  }

  facetsWrapper.style.setProperty("--pi-max-height-title", card__heading_max_height + "px");


  var card__information = document.querySelectorAll(".grid__item .card>.card__content .card__information");

  var card__information_max_height = 0;

  for (var i = 0; i < card__information.length; i++) {
    card__information_max_height = Math.max(card__information_max_height, card__information[i].offsetHeight);
  }
  facetsWrapper.style.setProperty("--pi-max-height-card__information", card__information_max_height + "px");
