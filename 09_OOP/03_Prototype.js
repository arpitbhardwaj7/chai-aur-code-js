/*
Prototype:
In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype property, which refers to another object. When you attempt to access a property or method on an object, and if it's not found directly on that object, JavaScript will look for it in the object's prototype, and if it's still not found, it will continue up the prototype chain until it either finds the property/method or reaches the end of the chain.
Prototypes are essential for implementing inheritance in JavaScript. When you create an object using a constructor function or with object literals, JavaScript automatically sets up the prototype chain for that object.
*/

let addNums = function (num1, num2) {
    return num1 + num2;
    console.log(this);
}

addNums.prototype.bestCollege = "IIIT Allahabad";

// console.log(addNums);
console.log(addNums.prototype);

var createCar = function (carName, carPrice) {
    this.carName = carName;
    this.carPrice = carPrice;
}

createCar.prototype.getDetails = function (){
    console.log(`Car name is ${this.carName} and it's price is ${this.carPrice}.`);
}

let swift = new createCar("Swift", 900000);
let scorpio = new createCar("Scorpio", 1700000);

swift.getDetails();

/*
Here's what happens behind the scenes when the 'new' keyword is used:
1. A new object is created: The new keyword initiates the creation of a new JavaScript object.
2. A prototype is linked: the newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/