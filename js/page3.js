'use strict';

console.log('test');

// global variables
let myContainerPage3 = document.querySelector('form');

function handleSubmitPage3(event){
  event.preventDefault();
  console.log('ConsoleLog1' , event.target.relaxTime.value);
  console.log(event.target.relaxObject.value);
  console.log(event.target.relaxType.value);
 

  let timeAnswer = event.target.relaxTime.value;
  let thingAnswer = event.target.relaxObject.value.toLowerCase();
  let typeAnswer = event.target.relaxType.value;
  
  let newChillax = new Chill(timeAnswer, thingAnswer, typeAnswer);
  console.log(newChillax);
  console.log(chillArray);
  storeChill();
  window.location.href="page4.html";
};

// Send chillax form info to local storage page 3
function storeChill() {
  console.log('hi');
  let stringifyChill = JSON.stringify(chillArray);
  localStorage.setItem('chillstorage', stringifyChill);
  console.log(stringifyChill);
};



// event listener for form submit
myContainerPage3.addEventListener('submit', handleSubmitPage3);

// check if local storage - Grab from local storage

let userData;
function getUser() {
  let potentialUser = JSON.parse(localStorage.getItem('userstorage'));
    console.log(potentialUser);
  
    let userData = new User(potentialUser[0].name, potentialUser[0].occupation);
    console.log(userData);
  const heading = document.getElementById('greeting').innerText=`Hello ${userData.name}`;
}

getUser();

