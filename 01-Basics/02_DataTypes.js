"use strict";   // Treat the JavaScript code as a newer version code.

// alert("Hello");   // We are using Node.js, not a browser.

/*
Various Data Types in JavaScript:
1. Number
2. BingInt
3. String
4. Boolean
5. Null
6. Undefined
7. Symbol
8. Object
*/

let age = 23;
let studentName = "Arpit Bhardwaj";
let loggedIn = true;
let city;
let state = null;

console.table([age, studentName, loggedIn, city, state]);
console.table([typeof(age), typeof(studentName), typeof(loggedIn), typeof(city), typeof(state)]);

console.log(typeof(undefined));   // Output: undefined
console.log(typeof(null));   // Output: object