let id1 = Symbol("id");

// Key can either be a string or a symbol.
// Value can be of any data type.
let myObj1 = {
    name: "Arpit",
    "full name": "Arpit Bhardwaj",
    [id1]: "MSE2023001",   // Syntax for including a symbol in an object.
    age: 23,
    college: "IIIT Allahabad",
    city: "Shimla",
    state: "Himachal Pradesh",
    isLoggedIn: false
};

console.log(myObj1);

console.log(myObj1.name);   // Method-1 of accessing object properties.
// console.log(myObj.full name);   // Error
// console.log(myObj.id1);   // Error
console.log(myObj1["name"]);   // Method-2 of accessing object properties. Prefer this method.
console.log(myObj1["full name"]);
console.log(myObj1[id1]);

// Freezing an object: Object.freeze() in JavaScript makes an object immutable by rendering its properties read-only, preventing addition, removal, or modification of existing properties.
myObj1.email = "arpitbhardwaj.711@gmail.com";
// Object.freeze(myObj1);
console.log(myObj1);
myObj1.email = "mse2023001@iiita.ac.in";
console.log(myObj1);

myObj1.greeting1 = function() {
    console.log("Good Morning!");
}

myObj1.greeting2 = function() {
    console.log(`Good Morning, ${this.name}!`);
}

console.log(typeof(myObj1.greeting1));   // Output: function
myObj1.greeting1();   // Output: Good Morning!
console.log(myObj1.greeting2);   // Output: [Function (anonymous)]
myObj1.greeting2();   // Output: Good Morning, Arpit!

