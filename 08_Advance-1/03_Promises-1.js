// Promise: In JavaScript, a promise represents a value that may not be available yet but will be resolved at some point in the future, either with a value or with an error.

const promiseObj = new Promise(function (resolve, reject) {
    // Perform asynchronous operations.
    // If the operation is successful, call resolve with the result;
    // resolve(result);
    // If the operation is not successful, call reject with the error.
    // reject(error);
});
console.log(promiseObj);   // Output: Promise { <pending> }