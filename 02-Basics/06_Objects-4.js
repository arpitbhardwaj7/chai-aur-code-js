// Object Destructuring: Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.
student = {
    name: "Arpit Bhardwaj",
    age: 23,
    college: "UIT Shimla",
    address: {
        city: "Shimla",
        state: "Himachal Pradesh"
    }
};

// console.log(student.age);
// console.log(student.address.city);

let {name: studentName, age, college, address} = student;

console.log(studentName);
console.log(age);
console.log(address);

student.college = "IIIT Allahabad";
console.log(student.college);   // Output: IIIT Allahabad
console.log(college);   // Output: UIT Shimla