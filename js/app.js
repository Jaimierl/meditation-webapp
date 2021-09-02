'use strict';

console.log('Hello World');

// global variables for constructor
let userArray = [];



// User Constructor function
function User(name,occupation){
  this.name = name;
  this.occupation = occupation;
  // this.time = time;
  // this.meditation = meditation;
  // this.type = type;
  userArray.push(this);
};

