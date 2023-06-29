"use strict";
console.log('that the app.js is running!!!!');

//methodName(you usually add a question or some information)
//alert('Welcome to 102 js intro!!!!!!');
// this creates a space in memory to hold some information from the user: name 

let userName;

// bob   asignment operator(=)   <----   users name get stored in the variable called userName
userName = prompt('What is your name?');
// console.log('did we get a name', typeof userName);
confirm('Are you sure thats your name?');


// creates the variable name and storage space 
let message;

// if(condition will go and it will resolve to be true or false){
//   we then do something if its true or false.
// }

// if(true){
//   console.log('this is cool');
// }

let hourNow = prompt('What is the military time now?');
console.log('did we get a time? ',hourNow);
//6pm - midnight
if(hourNow > 18 && hourNow < 24){
  message = 'Good Night';
  //6am - noon
} else if(hourNow > 6 && hourNow < 12){
  message = 'Good Morning';
  //12pm - 6pm 
} else if(hourNow > 12 && hourNow < 18){
  message = 'Good Afternoon';
} else {
  message = 'Go back to bed!';
}

//  lets output the name and then we will out put a message 
// document is and object and write() is one of its methods 
document.write('Hello ' + userName + ' !' + message);