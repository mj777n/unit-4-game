
// Begin Javascript for "Crystal Collector" //

var images = [
    "assets/images/diamond.jpg",
    "assets/images/crystal.jpg",
    "assets/images/crystal_pink.jpg",
    "assets/images/crystal_rainbow.jpg",
    ]
    var win = 0;
    var loss = 0;
  
  // Begin game // (run crystalCollector, then playAgain - resetGame functions)
  crystalCollector();
  
  function crystalCollector() {
    var crystalNumbers = [];
    // imageCrystal = [];
    // imageCrystal.length = 0;
    $("#crystals").empty();

    var counter = 0;
  
    //  Generate a random number between 19 - 120 // this will be the targt number
    var randomNumber = Math.floor(Math.random() * 102) + 19;
  
    //   Display random "target" number on screen (id field "random-number-box") 
    document.getElementById("random-number-box").innerHTML=randomNumber; 
  
    // Load the array [crystalNumbers] with the images.
    // Use a for loop to create crystals and assign data attributes.
    // Setup array to "store" img's
    var imageCrystal = [];
  
    for (var i = 0; i < images.length; i++) {
      crystalNumbers[i] = Math.floor(Math.random() * 12) + 1;
      // array to store random number for each image in array 
      // load <img>'s for each imageCrystal index
      imageCrystal = $("<img>");
  
      // Each crystal will be given the class ".crystal-image".
      // Allowing for styling each crystal
      imageCrystal.addClass("crystal-image");
     
      // Each imageCrystal will be given an src link to the crystal image, with local filename
      imageCrystal.attr("src", images[i]);
      
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // Set equal to the array value (ie. the random number value)
      imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.    
          $("#crystals").append(imageCrystal);       
    }  // end for loop
  
  
    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function() {
  
      // Determining the crystal's value requires us to extract the value from the data attribute.
      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
  
      // We then add the crystalValue to the user's score "counter" which is a global variable.
      // Every click, from every crystal increment global var counter.
      counter += crystalValue;
  
      document.getElementById("total-score-box").innerHTML=counter;
      // check for total score (ie. counter) equal to random number, player wins
      if (counter === randomNumber) {     
        win ++;
        document.getElementById("wins").innerHTML="WINS: "+win;
        alert("You got it! You won that one. Play again?");
        counter = 0;
        document.getElementById("total-score-box").innerHTML=counter; 
        // go to playAgain - once alert box is clicked
        playAgain();
      }
        // If user goes over, user loses 
      else if (counter >= randomNumber) {     
        loss ++;
        document.getElementById("losses").innerHTML="LOSSES: "+loss;      
        alert("You lose!! Your total was '"+counter+"' Play again?");
        counter = 0;
        document.getElementById("total-score-box").innerHTML=counter;
         // go to playAgain - once alert box is clicked 
        playAgain();
      }
    });  // end onclick crystal funtion 
  } // end function crystalCollector
  
  function resetBoard() {
   imageCrystal = [];
   imageCrystal.length = 0;
   $("#crystals").empty();
  }
  
  function playAgain() {
      resetBoard();
      crystalCollector();
  }