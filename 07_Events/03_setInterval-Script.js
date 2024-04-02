let startButtonVar = document.getElementById('start');
let stopButtonVar = document.getElementById('stop');

let intervalId;
startButtonVar.addEventListener('click', function () {
    intervalId = setInterval(function () {
        let date = new Date();
        console.log(`Current date & time is ${date.toLocaleString()}.`);
    }, 1000);
});

stopButtonVar.addEventListener('click', function () {
    clearInterval(intervalId);
    console.log('Stopped');
});