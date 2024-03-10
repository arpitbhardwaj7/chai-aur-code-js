// Immediately Invoked Function Expressions (IIFE): It is a JavaScript design pattern that involves defining and invoking a function immediately after its creation. The primary use of IIFE is to create a private scope for variables, preventing them from polluting the global scope.

// IIFE Using Normal Function
(function greet() {
    console.log("Hello-1");
})();

// IIFE Using Arrow Function
(() => {
    console.log("Hello-2");
})();