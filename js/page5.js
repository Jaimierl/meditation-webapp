'use strict';

// Grab info from local Storage Page 2 Here to greet user by name+ Personal Chillax
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
}


getUser();

// Grab info from local Storage Page 3 For Personal Chillax
let userData;
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
  const heading = document.getElementById('greeting').innerText=`${userData.name}'s Personal Chill`;
}

getUser();

// This grabs the chill thing job from local storage

function getChill() {
  let parsedChill = JSON.parse(localStorage.getItem('chillstorage'));
    console.log(parsedChill);
  
    let chillData = new Chill(parsedChill[0].time, parsedChill[0].thing, parsedChill[0].type);
    
}

getChill();

console.log("!!!!!!!!!!!!!!!!",chillArray[0].time);
console.log("!!!!!!!!!!!!!!!!",chillArray[0].type);

let chillaxResult = chillArray[0].time;
let chillaxTypeResult = chillArray[0].type; 

console.log (chillaxResult);
console.log (chillaxTypeResult);

// global variables for  5 minute videos

let fiveNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU?&autoplay=1'></iframe>";

let fiveLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ER9qZS6IJQM?autoplay=1&mute=1'allow='autoplay'></iframe>";

let fiveGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/inpok4MKVLM?autoplay=1&mute=1'allow='autoplay'></iframe>";

// global variables for 10 minute videos

let tenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/4hXYRXaJdtk'></iframe>";

let tenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ez3GgRqhNvA'></iframe>";

let tenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/_0lQw595WiQ'></iframe>";

// global variables for 15 minute videos

let fifteenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/IXN7GGr0pFI'></iframe>";

let fifteenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/W8a3T8pI9Ns'></iframe>";

let fifteenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/XPkHUvg4-ts'></iframe>";


let vidSwitch = [];

function vidTestSwitch(){
  vidSwitch.push(chillaxResult);
  vidSwitch.push(chillaxTypeResult);
}

vidTestSwitch();
console.log(vidSwitch[0]);

function switchTest(){
switch (chillaxResult && chillaxTypeResult){
  case ('5' && 'Nature'):
    document.write(fiveNature);
    break;
  case ('5' && 'Guided'):
    document.write(fiveGuided);
    break;
  case ('5' && 'LoFi'):
    document.write(fiveLoFi);
    break;
  case ('10' && 'Nature'):
      document.write(tenNature);
      break;
  case ('10' && 'Guided'):
      document.write(tenGuided);
      break;
  case ('10' && 'LoFi'):
      document.write(tenLoFi);
      break;
  case ('15' && 'Nature'):
      document.write(fifteenNature);
        break;
  case ('15' && 'Guided'):
      document.write(fifteenGuided);
        break;
  case ('15'&& 'LoFi'):
      document.write(fifteenLoFi);
        break;
};

switchTest();
