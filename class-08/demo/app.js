"use strict";
console.log('app.js is running!!!!');

let userName;
function userNameInput(){
  userName = prompt('What is your name?');
  confirm('Are you sure thats your name?');
  return document.write('Hello, ' + userName);
}
function hourNowInput(){
  let message;
  let hourNow = prompt('What is the military time now?');
  if(hourNow > 18 && hourNow < 24){
    message = 'Good Night';
  } else if(hourNow > 6 && hourNow < 12){
    message = 'Good Morning';
  } else if(hourNow > 12 && hourNow < 18){
    message = 'Good Afternoon';
  } else {
    message = 'Go back to bed!';
  }
  return document.write('Hello again ' + userName + ' !' + message);
}
let makeMeASandwich = function(bread, veggie, cheese){
  console.log(bread, veggie, cheese);
  return document.write("Here is a sandwich on " + bread + ", containing " + veggie + " and " + cheese);
}
makeMeASandwich('Sour Dough', 'Avacado Spread', 'Provolone');

//Class 8 below

function guessANumber(){
  //declare a variable to store some information or values
  let answer;

  while(answer != 7){
    answer = prompt('Guess a number between 1 and 10');
    if(answer != 7 ){
      alert('Try again');
    } else {
      alert('You are Correct!!!! Nice Job.');
    } //closes if /else statements
  } //closes the while loop
} //closes our function 



//this is how we can run a function, we have to invoke it or call it......
guessANumber();


function displayRating(){
//1.declare a variable creates space in memory to hold the value/string
let output = '';
//2. set prompt to get input
let pacMans =  prompt('Scale of 1 to 5, how many pac-mans would you like?');
//3.  create a for loop to display a rating and images on the html page
    for(let i = 0; i < pacMans; i++){
      console.log(i);
      output += '<img src="images/pac-man.png" height="250px" width="250px"  />';
    }
//4. return output...
    return document.write(output);
}//ends

displayRating();