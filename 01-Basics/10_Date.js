let currDate = new Date();
console.log(typeof(currDate));   // Output: object
console.log(currDate); 
console.log(currDate.toString());
console.log(currDate.toDateString());
console.log(currDate.toLocaleString());
console.log(currDate.toLocaleDateString());

let myBirthday1 = new Date(2000, 8, 7);
console.log(myBirthday1.toLocaleString());

let myBirthday2 = new Date(2000, 8, 7, 18, 30);
console.log(myBirthday2.toLocaleString());

let myBirthday3 = new Date("9/7/2000");
console.log(myBirthday3.toLocaleString());

// Timestamp
let currTimestamp = Date.now();
console.log(`Current timestamp: ${currTimestamp}`);
console.log(`My birthday timstamp: ${myBirthday2.getTime()}`);