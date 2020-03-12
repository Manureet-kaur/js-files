"use strict";

$("#tabs-2,#tabs-3").hide();
$("#info-nav")
  .children()
  .eq(0)
  .addClass("courant");

$("#info-nav a").on("click", function() {
  $("#tabs-1,#tabs-2,#tabs-3").hide();
  $(".courant").removeClass("courant");
  $($(this).attr("href")).show();
  $(this)
    .parent()
    .addClass("courant");
});
