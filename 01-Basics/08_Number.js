let num1 = 400;
console.log(num1);   // Output: 400

console.log(Number);   // Output: [Function: Number]

let num2 = new Number(100);
console.log(num2);   // Output: [Number: 100]

console.log(num2.toString().length);   // Output: 3
console.log(num2.toFixed(2));   // Output: 100.00

let num3 = 172.356;
console.log(num3.toFixed(2));   // Output: 172.36

let num4 = 1734.75678;
console.log(num4.toPrecision(8));   // Output: 1734.7568
console.log(num4.toPrecision(6));   // Output: 1734.76
console.log(num4.toPrecision(4));   // Output: 1735
console.log(num4.toPrecision(2));   // Output: 1.7e+3

let num5 = 1000000;
console.log(num5.toLocaleString());   // Output: 1,000,000
console.log(num5.toLocaleString('en-IN'));   // Output: 10,00,000