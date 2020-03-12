$($("#targets").children()).on("click", function() {
  let width = $(this).width();
  let newElement = document.createElement("span");
  $(newElement).addClass("label");
  newElement.appendChild(document.createTextNode(width));
  $(this).html(newElement);
});
