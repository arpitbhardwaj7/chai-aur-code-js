let student = {
    name: "Arpit",
    rollNo: "MSE2023001",
    college: "IIIT Allahabad",
    age: 23,

    printInfo: function () {
        console.log(`${this.name} of age ${this.age} studies in ${this.college}.`);
        console.log(this);
    }
}

student.printInfo();

console.log(this);   // Output: {}
// In Node.js environment, console.log(this) outputs an empty object {} if 'this' refers to the global object.
// In a browser, it outputs the Window object in the global scope if 'this' points to the global object.

let country = "India";

function fun() {
    let country = "USA";
    console.log(this);
    console.log(this.country);
}

fun();
console.log(country);

