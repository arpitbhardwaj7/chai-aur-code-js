let stopButtonVar = document.getElementById('stop');

let timeoutId = setTimeout(function () {
    let headingVar = document.getElementById('heading');
    headingVar.innerHTML = 'I study in IIIT Allahabad.';
}, 5000);

stopButtonVar.addEventListener('click', function () {
    clearTimeout(timeoutId);
    console.log('Stopped');
});
