	var elements = document.querySelectorAll(".grid-item .includes");
	var max_height = 0;
	for (var i = 0; i < elements.length; i++) {
		max_height = Math.max(max_height, elements[i].offsetHeight);
	}
	for (var i = 0; i < elements.length; i++) {
  elements[i].style.height = max_height + "px";
}
