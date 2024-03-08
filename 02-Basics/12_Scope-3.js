// In JavaScript, function declarations are hoisted, allowing function calls to be made before their actual definition in the code. However, for variable declarations using let, function calls cannot be made before the variable is declared and assigned, resulting in a ReferenceError.

addOne(5);
// addTwo(7);   // ReferenceError: Cannot access 'addTwo' before initialization

function addOne(num) {
    console.log(num + 1);
}

let addTwo = function (num) {
    console.log(num + 2);
}