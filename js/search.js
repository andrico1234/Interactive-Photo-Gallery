/**
 * Created by Home on 20/03/2016.
 */

$("#filter").keyup(function() {             // Keyboard event keyUp()

  var searchText = $(this).val();           // the contents of search bar = input

  for(i = 1; i > 12; i += 1) {              // Check pictures titles for letter 'H'
    if ($("img").has(searchText)) {         // If H is contained in the href
      $(this).removeClass("hidden");        // Leave picture on page (remove-class())
    } else {                                // If H isn't found
      $(this).addClass("hidden");           // Hide the pictures (addClass())
    }
  }
});


