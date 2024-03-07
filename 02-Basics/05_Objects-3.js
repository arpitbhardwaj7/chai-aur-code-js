let myObj1 = {a: 1, b: 2};
let myObj2 = {c: 3, d: 4};

// Combining Two Objects
// Method-1: assign()
let myObj3 = Object.assign({}, myObj1, myObj2);   // The first argument {} is an empty object that serves as the target for the merge. The properties from myObj1 and myObj2 are copied into this target object. The resulting combined object is assigned to the variable myObj3.
console.log(myObj3);   // Output: { a: 1, b: 2, c: 3, d: 4 }

// Method-2: Spread Operator
let myObj4 = {...myObj1, ...myObj2};
console.log(myObj4);   // Output: { a: 1, b: 2, c: 3, d: 4 }