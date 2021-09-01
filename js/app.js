console.log('Hello World');
// global variables for videos
let fiveNature = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/JrQMlzvsLIU'></iframe>"
}
};

document.write(fiveNature.video.value);
// global variables for constructor
let userArray = [];
// User Constructor function
function User(name,occupation,time,meditation,type){
  this.name = name,
  this.occupation = occupation,
  this.time = time,
  this.meditation = meditation,
  this.type = type
};