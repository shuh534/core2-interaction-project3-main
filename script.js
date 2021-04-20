// console.log("Is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keynewDjfpaz0B4p0" }).base(
  "appHPWR7mVCIrJKvW"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("crystal")
  .select({})
  .eachPage(gotPageOfCrystals, gotAllCrystals);

// an empty array to hold our data
var crystals = [];

// callback function that receives our data
function gotPageOfCrystals(stones, fetchNextPage) {
  console.log("gotPageOfCrystals()");
  // add the records from this page to our array
  crystals.push(...stones);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCrystals(err) {
  console.log("gotAllCrystals()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCrystals();
  showCrystals();
}

// just loop through the books and console.log them
function consoleLogCrystals() {
  console.log("consoleLogCrystals()");
  crystals.forEach(crystal => {
    console.log("Crystal:", crystal);
  });
}

// look through our airtable data, create elements
function showCrystals() {
  console.log("showCrystals()");
  crystals.forEach(crystal => {
     // create container for each song
     var crystalContainer = document.createElement("div");
     crystalContainer.classList.add("crystal-container");
     document.querySelector(".container").append(crystalContainer);

     // add song titles
     var crystalTitle = document.createElement("h1");
     crystalTitle.classList.add("crystal-title");
     crystalTitle.innerText = crystal.fields.crystal_title;
     crystalContainer.append(crystalTitle);

     var nameOfMeaning = document.createElement("h1");
     nameOfMeaning.classList.add("crystal-meaning");
     nameOfMeaning.innerText = crystal.fields.meaning;
     crystalContainer.append(nameOfMeaning);

     // var crystalColor = document.createElement("p");
     // crystalColor.classList.add("crystal-color");
     // crystalColor.innerText = crystal.fields.color;
     // crystalContainer.append(crystalColor);

     var crystalImage = document.createElement("img");
     crystalImage.classList.add("crystal-image");
     crystalImage.src = crystal.fields.crystal_image[0].url;
     crystalContainer.append(crystalImage);

     // add event listener to add active class to song container
     crystalContainer.addEventListener("click", function(event) {
     //   crystalColor.classList.toggle("active");
       crystalImage.classList.toggle("active");
     });

     // get genre field from airtable
     // loop through the array and add each genre as
     // a class to the song container
     var crystalColor = crystal.fields.color;
     crystalColor.forEach(function(color) {
       crystalContainer.classList.add(color);
     });

     // clicking on filter by brown 1
     // change background of pop genres to red
     // else change to white
     var filterBrown = document.querySelector(".js-brown");
     filterBrown.addEventListener("click", function() {
       if (crystalContainer.classList.contains("brown")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by red 2
     var filterRed = document.querySelector(".js-red");
     filterRed.addEventListener("click", function() {
       if (crystalContainer.classList.contains("red")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by green 3
     var filterGreen = document.querySelector(".js-green");
     filterGreen.addEventListener("click", function() {
       if (crystalContainer.classList.contains("green")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

     // filter by purple 4
     var filterPurple = document.querySelector(".js-purple");

     filterPurple.addEventListener("click", function() {
       if (crystalContainer.classList.contains("purple")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });

      // filter by orange 5
      var filterOrange = document.querySelector(".js-orange");

      filterOrange.addEventListener("click", function() {
        if (crystalContainer.classList.contains("orange")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });


         // filter by blue 6
         var filterBlue = document.querySelector(".js-blue");

         filterBlue.addEventListener("click", function() {
         if (crystalContainer.classList.contains("blue")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
           }
         });

            // filter by black 7
      var filterBlack = document.querySelector(".js-black");

      filterBlack.addEventListener("click", function() {
       if (crystalContainer.classList.contains("black")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
       }
      });

         // filter by yellow 8
         var filterYellow = document.querySelector(".js-yellow");

         filterYellow.addEventListener("click", function() {
           if (crystalContainer.classList.contains("yellow")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
           }
         });

            // filter by grey 9
      var filterGrey = document.querySelector(".js-grey");

      filterGrey.addEventListener("click", function() {
        if (crystalContainer.classList.contains("grey")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

         // filter by white 10
         var filterWhite = document.querySelector(".js-white");

         filterWhite.addEventListener("click", function() {
           if (crystalContainer.classList.contains("white")) {
             crystalContainer.style.background = "white";
           } else {
             crystalContainer.style.background = "none";
          }
         });

            // filter by pink 11
      var filterPink = document.querySelector(".js-pink");

      filterPink.addEventListener("click", function() {
        if (crystalContainer.classList.contains("pink")) {
          crystalContainer.style.background = "white";
        } else {
          crystalContainer.style.background = "none";
        }
      });

     // filter reset
     var filterReset = document.querySelector(".js-reset");
     filterReset.addEventListener("click", function() {
       crystalContainer.style.background = "none";
     });

// var crystalContainer = document.createElement("div");
// crystalContainer.classlist.add("crystal-container");
// document.querySelector(".container").append(crystalContainer);

// //add song titles to our song container
// var crystalTitle = document.createElement("h1");
// crystalTitle.classList.add("crystal-title");
// crystalTitle.innerText = crystal.fields.crystal_title;
// crystalContainer.append(crystalTitle);
// When the user scrolls the page, execute myFunction
    

    
  });
}
    
//  window.onscroll = function() {myFunction()};

//  // Get the navbar
//  var heading = document.getElementById("heading");

//  // Get the offset position of the navbar
//  var sticky = heading.offsetTop;

//  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//  function myFunction() {
//    if (window.pageYOffset >= sticky) {
//      heading.classList.add("sticky")
//    } else {
//      heading.classList.remove("sticky");
//    }
//  }
    



