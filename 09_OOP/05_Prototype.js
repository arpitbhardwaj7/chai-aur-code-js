let person = {
    name: 'Arpit Bhardwaj',
    city: 'Shimla'
};

let student = {
    college: 'IIIT Allahabad',
    // __proto__: person
};

// Old Syntax
// student.__proto__ = person;   // Also valid

// New Syntax
Object.setPrototypeOf(student, person);

