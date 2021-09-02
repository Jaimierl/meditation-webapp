'use strict';

console.log("test");

// Grab info from local Storage Page 2 Here to greet user by name


// global variables
let myContainerPage3 = document.querySelector('form');

function handleSubmitPage3(event){
  event.preventDefault();
  console.log('ConsoleLog1' , event.target.relaxTime.value);
  console.log(event.target.relaxObject.value);
  console.log(event.target.relaxType.value);
 

  let timeAnswer = event.target.relaxTime.value;
  let thingAnswer = event.target.relaxObject.value;
  let typeAnswer = event.target.relaxType.value;
  
  let newChillax = new Chill(timeAnswer, thingAnswer, typeAnswer);
  console.log(newChillax);
  console.log(chillArray);
  window.location.href="page4.html";
};

// Send chillax form info to local storage page 3
console.log(myContainerPage3);
// event listener for form submit
myContainerPage3.addEventListener('submit', handleSubmitPage3);

