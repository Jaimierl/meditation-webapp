'use strict';

// Grab info from local Storage Page 3 Here to reference users favourite chill object

function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
}


getUser();

// This will need to be on page 5 (WITH THE FUNCTION CALL!!!). It is just here currently for ease of reading.
function getChill() {
  let parsedChill = JSON.parse(localStorage.getItem('chillstorage'));
    console.log(parsedChill);
  
    let chillData = new Chill(parsedChill[0].time, parsedChill[0].thing, parsedChill[0].type);
    console.log(chillData);
}


getChill();

// CSS Animation - Page 4 Specific CSS File?