"use strict";
console.log('app.js is running!!!!');
//refactor
//how we write a function

// function functionName(){
  //code block where the code will do something or it will return something any value, objects, strings, numbers, array.
// return 
// }

//making a variable global it has a global scope
let userName;

//call a function, invoking a function 

function userNameInput(){
  // console.log('made it to the function now we can run the code!!!');
//  the scope is more local to just the inside of the function 
  // //1. Input
  userName = prompt('What is your name?');
  confirm('Are you sure thats your name?');
  return document.write('Hello, ' + userName);
}


 




function hourNowInput(){
  let message;
  //2. Input
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






/**
 * what do I need to give this function, and what do I want to get back? We want to give our function some ingredients and get back a string that represents sandwich.
 The ingredients we want to give it: bread, meat, cheese, veggies, condiments, grilled or fresh, the string we want to get back is: "Here is a sandwich on BREAD, containing MEAT and CHEESE, with VEGGIES and CONDIMENTS, served GRILLED OR FRESH",these are called parameters. think of them as placeholders.
 
 */
//function declaration!
//  function   sandwich(){}


//function expression 
// let makeMeASandwich = function(parameters/ ingredients){
 // code to make sandwich
// }


let makeMeASandwich = function(bread, veggie, cheese){
  console.log(bread, veggie, cheese);
  return document.write("Here is a sandwich on " + bread + ", containing " + veggie + " and " + cheese);
}



// call or invoke our functions    // arguments
makeMeASandwich('Sour Dough', 'Avacado Spread', 'Provolone');