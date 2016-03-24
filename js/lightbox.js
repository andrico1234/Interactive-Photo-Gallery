/**
 * Created by Home on 20/03/2016.
 */

var $overlay = $("<div id='overlay'></div>");        // Creates the overlay
var $image = $("<img id='overlayImage'>");           // Creates an image element for the overlay
var $caption = $("<p></p>");                         // Creates a caption variable that a paragraph tag

function closeArrows() {
  $("#leftArrow, #cross, #rightArrow").hide();       // Creates a function to hide overlay images
};

$(document).ready(function() {
  closeArrows();                                     // Closes overlay images instantly
});

$overlay.append($image);                             // Appends Image to the overlay
$overlay.append($caption);                           // Append caption to overlay
$overlay.append()
$("body").append($overlay);                          // Attaches the overlay to the DOM

$(".photo-gallery a").click(function(event) {        // The code that runs when an image is clicked
  event.preventDefault();                            //  Prevents default behaviour for clicking the image
  var $photoLink = $(this).attr("href");             // The variable stores the link destination
  $image.attr("src", $photoLink);                    // Gives the image element the correct information
  $overlay.show();                                   // This shows the overlay
  var $captionText = $(this).children("img").attr("alt");   // Stores the img's alt attribute
  $caption.text($captionText);                       // The alt attribute has its text added to the caption variable
  $("#leftArrow, #cross, #rightArrow").show();
})

$("#cross").click(function() {                       // When the cross is clicked or esc is pressed...
  $overlay.hide();                                   // ... the overlay disappears
  closeArrows();
})

  // Left and Right keys will change the picture
  // Youtube functionality


