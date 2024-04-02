let xhr = new XMLHttpRequest();   // Client has been created. open() not called yet.
console.log(`Ready State Value: ${xhr.readyState}`);   // Output: 0

let requestUrl = 'https://api.github.com/users/hiteshchoudhary';
xhr.open('GET', requestUrl);   // open() has been called.
console.log(`Ready State Value: ${xhr.readyState}`);   // Output: 1

xhr.send();   // send() has been called.
console.log(`Ready State Value: ${xhr.readyState}`);   // Output: 1

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.table([data.name, data.username, data.followers]);
    }
}