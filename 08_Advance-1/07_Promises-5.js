const promiseObj = new Promise(function (resolve, reject) {
    let error = true;

    if(!error) {
        resolve({name: 'Arpit Bhardwaj', college: 'IIIT Allahabad'});
    } else {
        reject('ERROR: Something went wrong.');
    }
});

promiseObj
.then(function (user) {
    console.log(user);
    return user.college;
})
.then(function (userCollege) {
    console.log(userCollege);
})
.catch(function (errorMessage) {
    console.log(errorMessage);
})
.finally(function () {
    console.log('The promise is either resolved or rejected.');
});