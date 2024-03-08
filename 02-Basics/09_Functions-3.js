// Functions With Objects
let studentArpit = {
    name: "Arpit Bhardwaj",
    age: 23,
    college: "IIIT Allahabad"
};

function displayStudentDetails(studentObj) {
    console.log(`${studentObj.name} is ${studentObj.age} years old and studies in ${studentObj.college}.`);
}

displayStudentDetails(studentArpit);

// Functions With Arrays
let myArr = [1, 2, 3, 4, 5];

function displaySecondElement(arr) {
    console.log(arr[1]);
}

displaySecondElement(myArr);