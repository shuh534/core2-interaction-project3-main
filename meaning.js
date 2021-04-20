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
    console.log(crystal);
     // create container for each song
     var crystalContainer = document.createElement("div");
     crystalContainer.classList.add("crystal-container");
     document.querySelector(".container").append(crystalContainer);

     // add song titles
     var crystalTitle = document.createElement("h1");
     crystalTitle.classList.add("crystal-title");
     crystalTitle.innerText = crystal.fields.crystal_title;
     crystalContainer.append(crystalTitle);

     var crystalImage = document.createElement("img");
     crystalImage.classList.add("crystal-image");
     crystalImage.src = crystal.fields.crystal_image[0].url;
     crystalContainer.append(crystalImage);
  
    //  // add event listener to add active class to song container
     crystalContainer.addEventListener("click", function(event) {
       // crystalMeaning.classList.toggle("active");
       crystalImage.classList.toggle("active");
     });

     // get genre field from airtable
     // loop through the array and add each genre as
     // a class to the song container
     var crystalMeaning = crystal.fields.meaning;
     console.log(crystalMeaning);
     crystalMeaning.forEach(function(meaning) {       
       crystalContainer.classList.add(meaning);
       console.log("container:", crystalContainer);
     });

    //  // clicking on filter by brown 1
    //  // change background of pop genres to red
    //  // else change to white
     var filterGrounding = document.querySelector(".js-grounding");
     filterGrounding.addEventListener("click", function() {    
       if (crystalContainer.classList.contains("grounding")) {
         crystalContainer.style.background = "white";
       } else {
         crystalContainer.style.background = "none";
       }
     });
  });
}




