// Arrays in JavaScript are heterogeneous due to their ability to store elements of different types.

let myArr1 = [1, 3, 7, 8, 5];
console.log(myArr1[0]);   // Output: 1

let myArr2 = new Array(3, 2, 4, 7, 9);
console.log(myArr2[0]);   // Output: 3

// Array Methods
// push(): Adds one or more elements to the end of an array in JavaScript.
myArr2.push(6);
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]
myArr2.push(7);
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6, 7]

// pop(): Removes the last element from the end of an array in JavaScript.
myArr2.pop();
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]

// unshift(): Adds one or more elements to the beginning of an array in JavaScript.
myArr2.unshift(77);
console.log(myArr2);   // Output: [77, 3, 2, 4, 7, 9, 6]

// shift(): Removes the first element from the beginning of an array in JavaScript. 
myArr2.shift();
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]

// includes(): Checks if an array or string includes a specific element or substring, returning a boolean in JavaScript.
console.log(myArr2.includes(9));   // Output: true
// indexOf(): Returns the index of the first occurrence of a specified element in an array or string in JavaScript. Returns -1 if not found.
console.log(myArr2.indexOf(7));   // Output: 3

// join(): Creates and returns a new string by concatenating all the elements of an array (or array-like object) with a specified separator in JavaScript.
let myArr2String = myArr2.join();
console.log(myArr2String);   // Output: 3,2,4,7,9,6
console.log(typeof(myArr2String));   // Output: string

console.log(`Before slicing, myArr1: ${myArr1}`);   // Output: Before slicing, myArr1: 1,3,7,8,5
let myArr3 = myArr1.slice(1, 4);
console.log(`After slicing, myArr3: ${myArr3}`);   // Output: After slicing, myArr3: 3,7,8
console.log(`After slicing, myArr1: ${myArr1}`);   // Output: After slicing, myArr1: 1,3,7,8,5

console.log(`Before splicing, myArr2: ${myArr2}`);   // Output: Before splicing, myArr2: 3,2,4,7,9,6
let myArr4 = myArr2.splice(1, 4);
console.log(`After splicing, myArr4: ${myArr4}`);   // Output: After splicing, myArr4: 2,4,7,9
console.log(`After splicing, myArr2: ${myArr2}`);   // Output: After splicing, myArr2: 3,6

// JavaScript array-copy operations create shallow copies.
let myArr5 = [1, 2, 3, 4, 5];
let myArr6 = myArr5;
console.log(`myArr5 before: ${myArr5}`);   // Output: myArr5 before: 1,2,3,4,5
console.log(`myArr6 before: ${myArr6}`);   // Output: myArr6 before: 1,2,3,4,5
myArr5[2] = 7;
console.log(`myArr5 after: ${myArr5}`);   // Output: myArr5 after: 1,2,7,4,5
console.log(`myArr6 after: ${myArr6}`);   // Output: myArr6 after: 1,2,7,4,5