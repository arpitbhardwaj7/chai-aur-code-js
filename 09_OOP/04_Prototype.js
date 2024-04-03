let user1 = {
    name: "Arpit Bhardwaj",
    college: "IIIT Allahabad"
};

let user2 = {
    name: "Prashant Gautam",
    college: "UIT Shimla"
};

Object.prototype.sayHello = "Hello, User";

console.log(user1.sayHello);
console.log(user2.sayHello);