// Arrays in JavaScript are heterogeneous due to their ability to store elements of different types.
// JavaScript array-copy operations create shallow copies.

let myArr1 = [1, 3, 7, 8, 5];
console.log(myArr1[0]);   // Output: 1

let myArr2 = new Array(3, 2, 4, 7, 9);
console.log(myArr2[0]);   // Output: 3

// Array Methods
myArr2.push(6);
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]
myArr2.push(7);
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6, 7]

myArr2.pop();
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]

myArr2.unshift(77);
console.log(myArr2);   // Output: [77, 3, 2, 4, 7, 9, 6]

myArr2.shift();
console.log(myArr2);   // Output: [3, 2, 4, 7, 9, 6]

console.log(myArr2.includes(9));   // Output: true
console.log(myArr2.indexOf(7));   // Output: 3

let myArr2String = myArr2.join();
console.log(myArr2String);   // Output: 3,2,4,7,9,6
console.log(typeof(myArr2String));   // Output: string

console.log(`Before slicing, myArr1: ${myArr1}`);   // Output: Before slicing, myArr1: 1,3,7,8,5
let myArr3 = myArr1.slice(1, 4);
console.log(`After slicing, myArr3: ${myArr3}`);   // Output: After slicing, myArr3: 3,7,8
console.log(`After slicing, myArr1: ${myArr1}`);   // Output: After slicing, myArr1: 1,3,7,8,5

console.log(`Before splicing, myArr2: ${myArr2}`);   // Output: Before splicing, myArr2: 3,2,4,7,9,6
let myArr4 = myArr2.splice(1, 4);
console.log(`After splicing, myArr4: ${myArr4}`);   // After splicing, myArr4: 2,4,7,9
console.log(`After splicing, myArr2: ${myArr2}`);   // After splicing, myArr2: 3,6