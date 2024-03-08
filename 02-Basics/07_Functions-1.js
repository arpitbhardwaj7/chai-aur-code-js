// Function Example-1
function sayHello() {
    console.log("Hello, World!");
}

console.log(sayHello);   // sayHello is a function reference.
sayHello();   // sayHello() is a function call.

// Function Example-2
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addTwoNumbers(5, 7);
console.log(sum);

// Function Example-3
function loginUserMessage(userName = "User") {
    return `${userName} just logged in.`;
}

console.log(loginUserMessage("Arpit"));
console.log(loginUserMessage());