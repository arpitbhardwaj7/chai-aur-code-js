// Nullish Coalescing Operator: This operator provides a concise way to handle default values in situations where you want to use a fallback only when a variable is null or undefined.

let a = null;
let b;

let c = a ?? 5;
let d = b ?? 6;
let e = a ?? b ?? 7;
let f = 8 ?? 9;

console.log(c);   // Output: 5
console.log(d);   // Output: 6
console.log(e);   // Output: 7
console.log(f);   // Output: 8