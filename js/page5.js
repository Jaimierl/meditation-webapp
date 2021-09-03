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

// switch (chillaxResult,chillaxTypeResult){
//   case chillaxResult === 5:
//      chillaxTypeResult === 'Guided';
//     document.write(fiveNature);
//     break;
// };

// console.log (switch(chillaxTypeResult));

// global variables for  5 minute videos

let fiveNature =  "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU'></iframe>";

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



function renderVideo(){
  if (chillaxResult === '5' && chillaxTypeResult === 'Guided'){
    document.write(fiveGuided);
  } else if (chillaxResult === '5' && chillaxTypeResult === 'Nature'){
    document.write(fiveNature); 
  } else if (chillaxResult === '5' && chillaxTypeResult === 'LoFi'){
    document.write(fiveLoFi); 
  }  else if (chillaxResult === '10' && chillaxTypeResult === 'LoFi'){
    document.write(tenLoFi); 
  } else if (chillaxResult === '10' && chillaxTypeResult === 'Nature'){
    document.write(tenNature); 
  } else if (chillaxResult === '10' && chillaxTypeResult === 'Guided'){
    document.write(tenGuided); 
  } else if (chillaxResult === '15' && chillaxTypeResult === 'LoFi'){
    document.write(fifteenLoFi); 
  } else if (chillaxResult === '15' && chillaxTypeResult === 'Guided'){
    document.write(fifteenGuided); 
  } else if (chillaxResult === '15' && chillaxTypeResult === 'Nature'){
    document.write(fifteenNature); 
  } else {
    alert("MALFUNCTION!")
  }
};

renderVideo();

//  let testVideo = document.getElementById('chillaxVid');
//  testVideo.innerHTML = video;



// switch (handle submit call will be what we look for in the switch). We do not need parenthesis here because we are looking for the return value of the function, aka which buttons were pressed. This will need to be handle submit because that is the event that puts the info into the function. Either this page or the app.js (most likely this page because it needs access to the video info/this is the time to show the videos)
// The CASE is the condition that was met. In parenthesis.
// After the colon is what you want to happen ie. document.write.

