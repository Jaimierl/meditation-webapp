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
  storeUser();
  // window.location.href="page3.html";
};

// set to local storage

function storeUser() {
  let stringifyUser = JSON.stringify(userArray);
  localStorage.setItem('userstorage', stringifyUser)
};

// check if local storage

function getUser() {
  let potentialUser = localStorage.getItem('userstorage');
  if(potentialUser){
    let parsedUser = JSON.parse(potentialUser);
    userArray = parsedUser;
  }
};


console.log(userArray);

// event listener for form submit
myContainerPage2.addEventListener('submit', handleSubmitPage2);
