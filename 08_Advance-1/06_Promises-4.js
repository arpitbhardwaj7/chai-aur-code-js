const promiseObj = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve({name: 'Arpit Bhardwaj', college: 'IIIT Allahabad'});
    }, 3000);
});

promiseObj.then(function (user) {
    console.log(user);
});