'use strict';

// Grab info from local Storage Page 2 Here to greet user by name+ Personal Chillax
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
};

getUser();

// Grab info from local Storage Page 3 For Personal Chillax
let userData;
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
  const heading = document.getElementById('greeting').innerText=`${userData.name}'s Personal Chill`;
};

getUser();

// This grabs the chill thing job from local storage

function getChill() {
  let parsedChill = JSON.parse(localStorage.getItem('chillstorage'));
    console.log(parsedChill);
  
    let chillData = new Chill(parsedChill[0].time, parsedChill[0].thing, parsedChill[0].type);
    
};

getChill();

// global variables targeting the time and type of meditation based on the user's answers

let chillaxResult = chillArray[0].time;
let chillaxTypeResult = chillArray[0].type;

// global variables for  5 minute videos

let fiveNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU?&autoplay=1'></iframe>";

let fiveLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ER9qZS6IJQM'></iframe>";

let fiveGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/inpok4MKVLM'></iframe>";

// global variables for 10 minute videos

let tenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/4hXYRXaJdtk'></iframe>";

let tenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ez3GgRqhNvA'></iframe>";

let tenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/_0lQw595WiQ'></iframe>";

// global variables for 15 minute videos

let fifteenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/IXN7GGr0pFI'></iframe>";

let fifteenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/W8a3T8pI9Ns'></iframe>";

let fifteenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/XPkHUvg4-ts'></iframe>";


// global variable that combines both array results into single string for evaluation in switch statement

let switchTestVid = chillaxResult + chillaxTypeResult;

// switch statement that renders videos to page

switch (switchTestVid){
  case '5Nature':
    document.write(fiveNature);
    break;
  case '5Guided':
    document.write(fiveGuided);
    break;
  case '5LoFi':
    document.write(fiveLoFi);
    break;
  case '10Nature':
      document.write(tenNature);
      break;
  case '10Guided':
      document.write(tenGuided);
      break;
  case '10LoFi':
      document.write(tenLoFi);
      break;
  case '15Nature':
      document.write(fifteenNature);
        break;
  case '15Guided':
      document.write(fifteenGuided);
        break;
  case '15LoFi':
      document.write(fifteenLoFi);
        break;
  default:
      alert('Find your own chill!');
        break;
};


// function that renders video based on user selections - backup if switch breaks
// function renderVideo(){
//   if (chillaxResult === '5' && chillaxTypeResult === 'Guided'){
//     document.write(fiveGuided);
//   } else if (chillaxResult === '5' && chillaxTypeResult === 'Nature'){
//     document.write(fiveNature); 
//   } else if (chillaxResult === '5' && chillaxTypeResult === 'LoFi'){
//     document.write(fiveLoFi); 
//   }  else if (chillaxResult === '10' && chillaxTypeResult === 'LoFi'){
//     document.write(tenLoFi); 
//   } else if (chillaxResult === '10' && chillaxTypeResult === 'Nature'){
//     document.write(tenNature); 
//   } else if (chillaxResult === '10' && chillaxTypeResult === 'Guided'){
//     document.write(tenGuided); 
//   } else if (chillaxResult === '15' && chillaxTypeResult === 'LoFi'){
//     document.write(fifteenLoFi); 
//   } else if (chillaxResult === '15' && chillaxTypeResult === 'Guided'){
//     document.write(fifteenGuided); 
//   } else if (chillaxResult === '15' && chillaxTypeResult === 'Nature'){
//     document.write(fifteenNature); 
//   } else {
//     alert("MALFUNCTION!")
//   }
// };

// renderVideo();
