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



// global variables for  5 minute videos

let fiveNature =  "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU'></iframe>";

document.write(fiveNature);

let fiveGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/inpok4MKVLM'></iframe>";

document.write(fiveGuided);

let fiveLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ER9qZS6IJQM'></iframe>";
document.write(fiveLoFi);

// global variables for 10 minute videos

let tenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/4hXYRXaJdtk'></iframe>";
document.write(tenNature);

let tenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/ez3GgRqhNvA'></iframe>";
document.write(tenGuided);

let tenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/_0lQw595WiQ'></iframe>";
document.write(tenLoFi);

// global variables for 15 minute videos

let fifteenNature = "<iframe width='560' height='315' src='https://www.youtube.com/embed/IXN7GGr0pFI'></iframe>";
document.write(fifteenNature);

let fifteenGuided = "<iframe width='560' height='315' src='https://www.youtube.com/embed/W8a3T8pI9Ns'></iframe>";
document.write(fifteenGuided);

let fifteenLoFi = "<iframe width='560' height='315' src='https://www.youtube.com/embed/XPkHUvg4-ts'></iframe>";
document.write(fifteenLoFi);

// switch (handle submit call will be what we look for in the switch). We do not need parenthesis here because we are looking for the return value of the function, aka which buttons were pressed. This will need to be handle submit because that is the event that puts the info into the function. Either this page or the app.js (most likely this page because it needs access to the video info/this is the time to show the videos)
// The CASE is the condition that was met. In parenthesis.
// After the colon is what you want to happen ie. document.write.
// This code is WRONG but for syntax:
// switch(handleSubmit){
//   case (5minutes&&nature):
  // From the radio buttons. Notice the colon here.
  // LOOK AT THE SWITCHES PAGE!!
