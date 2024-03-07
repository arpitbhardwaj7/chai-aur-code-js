// Non-Singleton Object
let myObj1 = {};

// Singleton Object
let myObj2 = new Object();
myObj2.name = "Arpit Bhardwaj";
myObj2["college"] = "IIIT Allahabad";
myObj2.address = {
    city: "Shimla",
    state: "Himachal Pradesh"
};

console.log(myObj2);
console.log(myObj2.address.state);

console.log(Object.keys(myObj2));   // Output: [ 'name', 'college', 'address' ]
console.log(Object.values(myObj2));   // Output: ['Arpit Bhardwaj', 'IIIT Allahabad', { city: 'Shimla', state: 'Himachal Pradesh' }]