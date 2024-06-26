let name = "Arpit";   // A string primitive.
let city = "Shimla";
let age = 23;

// Avoid this method.
console.log("My name is " + name + ". I am from " + city + ". I am " + age + " years old.");
// Use this method instead.
console.log(`My name is ${name}. I am from ${city}. I am ${age} years old.`);

let gameName = new String('GTA-Vice-City');   // A string object.
console.log(gameName);   // Output: GTA-Vice-City
console.log(gameName[2]);   // Output: A
console.log(gameName.charAt(4));   // Output: V
// length: Returns the number of characters in a string.
console.log(gameName.length);   // Output: 13
// toUpperCase(): Converts all characters in a string to uppercase.
console.log(gameName.toUpperCase());   // Output: GTA-VICE-CITY
// indexOf(): Returns the index of the first occurrence of a specified substring in a string.
console.log(gameName.indexOf('i'));   // Output: 5

// substring(): Extracts characters from a string within the range [Start index, End index).
let newString1 = gameName.substring(2, 5);
console.log(newString1);   // Output: A-V

// substring(): Extracts characters from a string within the range [Start index, End index).
let newString2 = gameName.slice(2, 5);
console.log(newString2);   // Output: A-V

// trim(): Removes whitespace from both ends of a string.
let newString3 = "   Arpit     ";
console.log(newString3.trim());   // Output: Arpit

// replace(): Replaces specified characters or patterns in a string with a new value.
let newString4 = "Arpit studies in UIT Shimla.";
console.log(newString4.replace("UIT Shimla", "IIIT Allahabad"));   // Output: Arpit studies in IIIT Allahabad.

// includes(): Checks if a string contains a specific substring and returns a boolean.
console.log(gameName.includes('NFS'));   // Output: false

// split(): Splits a string into an array of substrings based on a specified delimiter.
console.log(gameName.split('-'));   // Output: ['GTA', 'Vice', 'City']

// JavaScript string-copy operations create deep copies.
let myString5 = new String('I live in Shimla.');
let myString6 = myString5;
console.log(`myString5 before: ${myString5}`);   // Output: myString5 before: I live in Shimla.
console.log(`myString6 before: ${myString6}`);   // Output: myString6 before: I live in Shimla.
myString5 = myString5.replace("Shimla", "Prayagraj");
console.log(`myString5 after: ${myString5}`);   // Output: myString5 after: I live in Prayagraj.
console.log(`myString6 after: ${myString6}`);   // Output: myString6 after: I live in Shimla.