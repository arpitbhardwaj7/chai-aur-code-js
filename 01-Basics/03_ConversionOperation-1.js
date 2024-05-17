let score1 = "33";
let score1InNumber = Number(score1);
console.log(typeof(score1));   // Output: string
console.log(typeof(score1InNumber));   // Output: number

let score2 = "123abc"
let score2InNumber = Number(score2);
console.log(score2InNumber);   // Output: NaN
console.log(typeof(score2InNumber));   // Output: number

let score3 = null;
let score3InNumber = Number(score3);
console.log(score3InNumber);   // Output: 0
console.log(typeof(score3InNumber));   // Output: number

let score4 = undefined;
let score4InNumber = Number(score4);
console.log(score4InNumber);   // Output: NaN
console.log(typeof(score4InNumber));   // Output: number

let score5 = true;
let score5InNumber = Number(score5);
console.log(score5InNumber);   // Output: 1
console.log(typeof(score5InNumber));   // Output: number

let isLoggedIn1 = true;
console.log(isLoggedIn1);   // Output: true
console.log(typeof(isLoggedIn1));   // Output: boolean

let isLoggedIn2 = 1;   // 1 => true; 0 => false
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);   // Output: true
console.log(typeof(booleanIsLoggedIn2));   // Output: boolean

let isLoggedIn3 = "Arpit";   // Non-empty string => true
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);   // Output: true
console.log(typeof(booleanIsLoggedIn3));   // Output: boolean

let isLoggedIn4 = "";   // Empty string => false
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4);   // Output: false
console.log(typeof(booleanIsLoggedIn4));   // Output: boolean