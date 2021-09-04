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

let fiveNature =  "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU?autoplay=1&mute=1' allow='autoplay'></iframe>";

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

function renderVideo(){
  if (chillaxResult === '5' && chillaxTypeResult === 'Guided'){
    console.log(fiveGuided);
    document.write(fiveGuided);
  } else if (chillaxResult === '5' && chillaxTypeResult === 'Nature'){
    console.log(fiveNature);
    document.write(fiveNature); 
  } else if (chillaxResult === '5' && chillaxTypeResult === 'LoFi'){
    console.log(fiveLoFi);
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
    alert("Chill Your Own Way!")
  }
};

renderVideo();

// let vid;
// switch (renderVideo){
//   case '5':'Guided':
//     vid = fiveGuided;
//     break;
// }
// 



// function onYouTubeIframeAPIReady() {
//   var player;
//   player = new YT.Player('muteYouTubeVideoPlayer', {
//     videoId: 'YOUR_VIDEO_ID', // YouTube Video ID
//     width: 560,               // Player width (in px)
//     height: 316,              // Player height (in px)
//     playerVars: {
//       autoplay: 1,        // Auto-play the video on load
//       controls: 1,        // Show pause/play buttons in player
//       showinfo: 0,        // Hide the video title
//       modestbranding: 1,  // Hide the Youtube Logo
//       loop: 1,            // Run the video in a loop
//       fs: 0,              // Hide the full screen button
//       cc_load_policy: 0, // Hide closed captions
//       iv_load_policy: 3,  // Hide the Video Annotations
//       autohide: 0         // Hide video controls when playing
//     },
//     events: {
//       onReady: function(e) {
//         e.target.mute();
//       }
//     }
//   });
//  }
