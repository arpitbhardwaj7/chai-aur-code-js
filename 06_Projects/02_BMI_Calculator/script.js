let form = document.querySelector('form');
let result = document.querySelector('#result');
let remarks = document.querySelector('#remarks');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    if(isNaN(height) || height < 0) {
        result.innerHTML = 'Enter a valid height.';
    } else if(isNaN(weight) || weight < 0) {
        result.innerHTM = 'Enter a valid weight.';
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `Your BMI is ${bmi}`;

        if(bmi < 18.6) {
            remarks.innerHTML = 'You are underweight.';
        } else if(bmi >= 18.6 && bmi < 24.9) {
            remarks.innerHTML = 'Your weight is in normal range.'
        } else if(bmi >= 24.9) {
            remarks.innerHTML = 'You are overweight';
        }
    }
});