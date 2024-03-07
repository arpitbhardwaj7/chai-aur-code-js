// Object Destructuring
student = {
    name: "Arpit Bhardwaj",
    age: 23,
    college: "IIIT Allahabad",
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