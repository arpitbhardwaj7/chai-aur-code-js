new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed.');
        resolve();

    }, 3000);
}).then(function () {
    console.log('Promise is consumed.');
});