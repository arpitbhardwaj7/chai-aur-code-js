console.log(Math);   // Output: Object [Math] {}

console.log(Math.abs(-4));   // Output: 4
console.log(Math.round(4.6));   // Output: 5
console.log(Math.floor(4.6));   // Output: 4
console.log(Math.ceil(4.6));   // Output: 5
console.log(Math.min(2, 7, 1, 9));   // Output: 1
console.log(Math.max(2, 7, 1, 9));   // Output: 9

console.log(Math.random());   // Output: Random number within the range [0, 1).
console.log(Math.random() * 10);   // Output: Random number within the range [0, 10).
console.log(Math.floor(Math.random() * 10));   // Output: Random integer within the range [0, 9].
console.log((Math.floor(Math.random() * 10)) + 1);   // Output: Random integer within the range [1, 10].

let minNum = 20;
let maxNum = 35;
console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);   // Output: Random integer within the range [20, 35].
