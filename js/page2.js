'use strict';
// global variables
let myContainerPage2 = document.querySelector('form');

function handleSubmitPage2(event){
  event.preventDefault();
  console.log(event.target.userName.value);
  console.log(event.target.userOccupation.value);
  let userName = event.target.userName.value;
  let userOccupation = event.target.userOccupation.value;
  let newUser = new User(userName, userOccupation);
  console.log(newUser);
  console.log(userArray);
  // window.location.href="page3.html";
};

// Put into Local Storage Page 2 Here!

// event listener for form submit
myContainerPage2.addEventListener('submit', handleSubmitPage2);