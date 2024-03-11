// Example-1
nums = [1, 2, 3, 4, 5];

// Implementation-1
console.log("Implementation-1");
function printNums(num) {
    console.log(num);
}

nums.forEach(printNums);

console.log();

// Implementation-2
console.log("Implementation-2");
nums.forEach(function (num) {
    console.log(num);
});

console.log();

// Implementation-3 (Using Arrow Function)
console.log("Implementation-3");
nums.forEach((num) => {
    console.log(num);
});

console.log();

nums.forEach((num, index, arr) => {
    console.log(`Number: ${num},  Index: ${index}, Array: ${arr}`);
});

console.log();

// Example-2
let myObj = [{name: "Arpit", city: "Prayagraj"},
    {name: "Prashant", city: "Shimla"},
    {name: "Atikrant", city: "Mohali"}];

    myObj.forEach((obj) => {
        console.log(obj.city);
    });