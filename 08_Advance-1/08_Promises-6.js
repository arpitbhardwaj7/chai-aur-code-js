/*
Async/Await:
1. Introduced in ES2017, async/await provides a more synchronous way to write asynchronous code. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.
2. 'async' keyword is used to define an asynchronous function, which always returns a promise.
3. 'await' keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected). It can only be used inside an async function.
4. Async/await syntax simplifies error handling by allowing you to use try/catch blocks around asynchronous code.
*/

const promiseObj = new Promise(function (resolve, reject) {
    let error = false;

    if(!error) {
        resolve({name: 'Arpit Bhardwaj', college: 'IIIT Allahabad'});
    } else {
        reject('ERROR: Something went wrong.');
    }
});

async function consumePromiseObj() {
    try {
        const response = await promiseObj;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseObj();