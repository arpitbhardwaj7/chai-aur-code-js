/*
Two Types of Data Types in JavaScript (Based on How Data is Stored and Accessed):
1. Primitive => Passed by value | Stored in stack
   1.1 Number
   1.2 BigInt
   1.3 String
   1.4 Boolean
   1.5 Symbol
   1.6 Undefined
   1.7 Null
2. Reference (Non-Primitive) => Passed by reference | Stored in heap
   2.1 Arrays
   2.2 Objects
   2.3 Functions
*/

// Arrays
let fruits = ["Apple", "Banana", "Pineapple"];

console.log(fruits);   // Output: ['Apple', 'Banana', 'Pineapple']
console.log(typeof(fruits));   // Output: object

// Objects
let arpit = {
    name: "Arpit Bhardwaj",
    age: 23
};

console.log(arpit);   // Output: {name: 'Arpit Bhardwaj', age: 23}
console.log(typeof(arpit));   // Output: object

// Function
let myFunction = function () {
    console.log("Hello, World");
}

console.log(myFunction);   // Output: [Function: myFunction]
console.log(typeof(myFunction));   // Output: function