"use strict";

let div = $("#container div");

div.eq(0).hide();
div
  .eq(1)
  .hide("slow")
  .show("fast");
div
  .eq(2)
  .fadeOut(5000)
  .delay(3000)
  .fadeIn(4000);
div
  .eq(3)
  .fadeTo(5000, 0.3, "swing", function() {
    $(this).addClass("active");
  })
  .fadeTo(4000, 0.6);
div
  .eq(4)
  .slideUp(4000)
  .slideDown(4000);
