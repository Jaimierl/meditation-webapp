'use strict';

// Grab info from local Storage Page 3 Here to reference users favourite chill object

// This grabs the users job from local storage
let userData;
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
  const heading = document.getElementById('jobgreeting').innerText=`Being a ${userData.occupation} can be stressful at times.`;
}

getUser();

// This grabs the chill thing job from local storage
let chillData;
function getChill() {
  let parsedChill = JSON.parse(localStorage.getItem('chillstorage'));
    console.log(parsedChill);
  
    let chillData = new Chill(parsedChill[0].time, parsedChill[0].thing, parsedChill[0].type);
    console.log(chillData.thing);
    const heading = document.getElementById('thinggreeting').innerText=`Grab your ${chillData.thing} and take a moment out of your day to calm your mind and relax. `;
}


getChill();

// // This will also need to be on page 5 (WITH THE FUNCTION CALL!!!). It is just here currently for ease of reading.


// CSS Animation - Page 4 Specific CSS File?