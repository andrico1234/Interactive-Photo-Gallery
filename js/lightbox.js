/**
 * Created by Home on 20/03/2016.
 */

var $overlay = $("<div id='overlay'></div>");        // Creates the overlay
var $image = $("<img id='overlayImage'>");           // Creates an image element for the overlay
var $caption = $("<p></p>");                         // Creates a caption variable that a paragraph tag
var $photoLink;
var leftKeyCode = 37;
var rightKeyCode = 39;
var $activePhoto;
var $captionText;

function closeArrows() {
  $("#leftArrow, #cross, #rightArrow").hide();       // Creates a function to hide overlay images
}

$(document).ready(function() {
  closeArrows();                                     // Closes overlay images instantly
});


$("#rightArrow").click(function() {
  var $newPhoto = $activePhoto.next().attr("href"); // Puts the destination of the sibling element into a variable
  $image.attr("src", $newPhoto);                    // Updates the image with the source of the new photo.
  $activePhoto = $activePhoto.next();
  $captionText = $activePhoto.next().children("img").attr("alt");   // Gets the alt attribute from the sibling's child's alt's attribute.
  $caption.text($captionText);                      // Uses the captionText variable to change the text of the caption.
});

$("#leftArrow").click(function() {
  var $newPhoto = $activePhoto.prev().attr("href"); // Puts the destination of the sibling element into a variable
  $image.attr("src", $newPhoto);                    // Updates the image with the source of the new photo.
  $activePhoto = $activePhoto.prev();
  $captionText = $activePhoto.prev().children("img").attr("alt");   // Gets the alt attribute from the sibling's child's alt's attribute.
  $caption.text($captionText);
});

$overlay.append($image);                             // Appends Image to the overlay
$overlay.append($caption);                           // Append caption to overlay
$overlay.append();
$("body").append($overlay);                          // Attaches the overlay to the DOM

$(".photo-gallery a").click(function(event) {        // The code that runs when an image is clicked
  event.preventDefault();                            //  Prevents default behaviour for clicking the image
  $photoLink = $(this).attr("href");                 // The variable stores the link destination
  $image.attr("src", $photoLink);                    // Gives the image element the correct information
  $overlay.show();                                   // This shows the overlay
  $captionText = $(this).children("img").attr("alt");   // Stores the img's alt attribute
  $caption.text($captionText);                       // The alt attribute has its text added to the caption variable
  $("#leftArrow, #cross, #rightArrow").show();
  $activePhoto = $(this);
})

$("#cross").click(function() {                       // When the cross is clicked or esc is pressed...
  $overlay.hide();                                   // ... the overlay disappears
  closeArrows();
});


  // Left and Right keys will change the picture
  // Youtube functionality


// to move right, I will need to get the adjacent sibling element. first-of-child pseudoclass class represents the first sibling of its type.
//
