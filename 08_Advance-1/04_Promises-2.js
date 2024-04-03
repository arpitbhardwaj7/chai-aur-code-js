console.log('Before promise');

const promiseObj = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed.');
        resolve();
    }, 3000);
});

promiseObj.then(function () {
    console.log('Promise is consumed.')
});

// A promise is considered fully consumed when you've used at least one of the following methods: then(), catch(), or finally(). These methods represent the primary means of interacting with a promise and its eventual result or error. When you use at least one of these methods, you've effectively consumed the promise because you've provided instructions on what to do once the promise resolves or rejects.

console.log('After promise');