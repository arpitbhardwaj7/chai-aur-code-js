// String to Number Conversion
console.log("2" > 1);   // Output: true
console.log("02" > 1);   // Output: true

// Equality check (==) and comparison check (>,<,>=,<=) works differently. Comparison converts null to number, treating it as 0.
console.log(null == 0);   // Output: false
console.log(null > 0);   // Output: false
console.log(null >= 0);   // Output: true
console.log(null < 0);   // Output: false
console.log(null <= 0);   // Output: true

console.log(undefined > 0);   // Output: false
console.log(undefined == 0);   // Output: false
console.log(undefined >= 0);   // Output: false

// == vs. ===
// == compares only value, whereas === compares both, value as well as data type.
console.log("2" == 2);   // Output: true
console.log("2" === 2);   // Output: false