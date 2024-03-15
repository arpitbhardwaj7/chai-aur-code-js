let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

body.addEventListener('click', function (e) {
    body.style.backgroundColor = 'white';
});

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        if(e.target.id == 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});