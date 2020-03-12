"use strict";

console.log("Hello jQuery !");

// todo (1) : select all p's in the document and store the selection in a variable named pElements
console.groupCollapsed("1");
// ??
let pElements = $("p");
console.log("pElements: ", pElements);
console.groupEnd();

// todo (2) : Use the pElements variable to display the first text contents of these paragraphs (.eq() and .text() methods)
console.groupCollapsed("2");
// ??
console.log(pElements.eq(1).text());
console.groupEnd();

// todo (3) : Display its HTML content (.html () method)
console.groupCollapsed("3");
// ??
console.log(pElements.eq(0).text());
console.groupEnd();

// todo (4) : Change the HTML content (.html() method) of all h2 titles on the page to "Contents with <strong>jQuery</strong>
console.groupCollapsed("4");
// ??
console.log($("h2").html("Contents with <strong>jQuery</strong>"));
console.groupEnd();

// todo (5) : Select the "costaud" class elements and place them in a "costaud" variable
console.groupCollapsed("5");
// ??
let costaud = $(".costaud");
console.log("costauds:", costaud);
console.groupEnd();

// todo (6) : Select all the li of the menu (the nav of the header) and place them in a variable named menuLiElements.
// Log the variable. From menuLiElements, select the child link of SECOND li (.eq (), .children ()),
// put it in a variable named linkElements. Log it in the console.
// Indicate in the console if this hyperlink has the class "active" or not (whether it is explicit in the console if it has the class or not).
// Use the .hasClass () method. Write an if statement that puts the text of the hyperlink in uppercase if that element has the active class.
console.groupCollapsed("6");
// ??
let menuLiElements = $("nav li");
console.log("menuLiElements:", menuLiElements);

let linkElements = menuLiElements.eq(1).children();
console.log("linkElements:", linkElements);

console.log(
  "linkElements.hasClass('active'): ",
  linkElements.hasClass("active")
);

console.groupEnd();

// todo (7): Log the tagName of this hyperlink (.prop ("tagName") method). In the same way, log its href attribute (.attr ("href") method).
// Change this attribute to "#" and check the changes by inspecting the DOM.
console.groupCollapsed("7");
// ??
console.log("linkElements.prop('tagName'): ", linkElements.prop("tagName"));
console.log("linkElements.attr('href'): ", linkElements.attr("href"));
console.groupEnd();

// todo (8): Start from the previous linkElements. Go back to his parent, the li, using (.parent ()).
// Log in the console its property "id" (.prop ("id")). What do you observe for the id? Finally, change this id to "mi2".
console.groupCollapsed("8");
// ??
console.log(
  "linkElements.parent().prop('id'): ",
  linkElements.parent().prop("id")
);
linkElements.parent().attr("id", "mi2");
console.log(
  "linkElements.parent().prop('id'): ",
  linkElements.parent().prop("id")
);
console.groupEnd();

// todo (9): Select the input element whose type is range and place it in a variable named ageInput and log the variable.
// Start from this variable, and change its max attribute to 99 (.attr ()) and its value (value) to 55 (.val ()). Check the changes by inspecting the DOM.
console.groupCollapsed("9");
// ??
let ageInput = $('input[type="range"]');
console.log(ageInput);
ageInput.attr("max", 99);
ageInput.val(55);
console.groupEnd();

// todo (10): Select the input whose "name" is "jQuery" and put it in a variable named jQueryInput.
// Display the value checked property (.prop ("checked")) to the console. Then reverse this state WITHOUT TAKING INTO ACCOUNT THE INITIAL VALUE. Check in the page.
console.groupCollapsed("10");
// ??
let jQueryInput = $('input[name="jquery"]');
console.log('jQueryInput.prop("checked"): ' + jQueryInput.prop("checked"));
jQueryInput.prop("checked", true);
console.groupEnd();

// todo (11): Select the images contained in the #image element (a div) and place this selection in a variable named smileImages.
// Log the smile variable. Display in the console the width of the first of the two images (.width () method) and its height (.height () method).
// Always for the first of the two images, display in the console its top and left positions relative to their parent (.position ()), then relative to the entire document (.offset ())
console.groupCollapsed("11");
// ??
let smileImages = $("#image img");
console.log(smileImages);
console.log("smileImages.eq(0).width(): " + smileImages.eq(0).width());
console.log("smileImages.eq(0).height(): " + smileImages.eq(0).height());
console.log("smileImages.eq(0).position(): ", smileImages.eq(0).position());
console.log("smileImages.eq(0).offset(): ", smileImages.eq(0).offset());
console.groupEnd();

// todo (12): Change the width of the first of the two images to 250 (.width (250)). There is no unity here, they are always pixels.
// Then change its position relative to its parent (.position ({top: 50, left: 200})) and change the position of the second image relative to the document (.offset ({top: 25, left: 100 }).
console.groupCollapsed("12");
// ??
smileImages.eq(0).width(250);
smileImages.eq(0).position({ top: 50, left: 200 });
smileImages.eq(1).offset({ top: 25, left: 100 });
console.groupEnd();
