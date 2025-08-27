"use strict";
// To RUN ... : - npx tsc -b 
// then run node index.js 🏝️
// 💡 1
// Thing to learn - How to give types to arguments of a function
// function greet(firstName: any) {
//     console.log("Hello" + firstName);
// }
// greet("Khushiiii");
// greet("1");
// 2 💚 -----------
// Thing to learn - How to assign a return type to a function
// Write a function that calculates the sum of two functions
// function sum ( a : number , b : number )  {
//     return a+b;
// }
// console .log (sum(2,3));
// -----------------------------------------
// Problem 3 🫶 - Return true or false based on if a user is 18+
// Thing to learn - Type inference
// Function name - isLegal
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(1));
