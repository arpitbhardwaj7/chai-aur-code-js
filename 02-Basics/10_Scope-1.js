// In JavaScript, var has function or global scope, while let and const have block-level scope.

// Defining a block.
{
    let a = 20;
    const b = 30;
    var c = 10;

    c = 50;
}

// console.log(a);   // ReferenceError: a is not defined
// console.log(b);   // ReferenceError: b is not defined
console.log(c);
c = 100;
console.log(c);