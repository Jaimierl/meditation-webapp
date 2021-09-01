'use strict';
// global variables
let myContainer = document.querySelector('form');

function handleSubmit(event){
  event.preventDefault();
  let userName = event.target.userName.text;
  let userOccupation = event.target.userOccupation.text;
  let newUser = User(userName,userOccupation);
  console.log(`in function` + newUser);
}
// need to link back to app.js, received newUser not defined 

console.log(`out of function` + newUser);

// event listener for form submit
myContainer.addEventListener('submit', handleSubmit);