let startButtonVar = document.getElementById('start');
let stopButtonVar = document.getElementById('stop');
let bodyVar = document.querySelector('body');

let randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += hex[randomIndex];
    }

    return color;
};

let intervalId = null;
startButtonVar.addEventListener('click', function () {
    if(intervalId == null) {
        intervalId = setInterval(function () {
            bodyVar.style.backgroundColor = randomColor();
        }, 1000);
    }
});

stopButtonVar.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});