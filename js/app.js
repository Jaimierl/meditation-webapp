'use strict';

console.log('Hello World');

// global variables for user constructor
let userArray = [];

// User Constructor function
function User(name,occupation,){
  this.name = name;
  this.occupation = occupation;

  userArray.push(this);
};

// global variables for chill constructor
let chillArray = [];

// Chill Constructor function
function Chill(time, thing, type){
  this.time = time;
  this.thing = thing;
  this.type = type;
}
