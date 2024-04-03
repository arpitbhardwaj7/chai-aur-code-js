/*
Promise: In JavaScript, a promise represents a value that may not be available yet but will be resolved at some point in the future, either with a value or with an error.

A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.
*/

const promiseObj = new Promise(function (resolve, reject) {
    // Perform asynchronous operations.
    // If the operation is successful, call resolve with the result;
    // resolve(result);
    // If the operation is not successful, call reject with the error.
    // reject(error);
});
console.log(promiseObj);   // Output: Promise { <pending> }