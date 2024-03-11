// reduce(): The reduce method is used to reduce an array to a single value, applying a provided function and accumulating the result.

// Example-1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue = 0;

let sum = nums.reduce((accumulator, currentValue) => (accumulator + currentValue), initialValue);

console.log(sum);

// Example-2
let marksObj = [{name: "Arpit", marks: 7},
{name: "Arpit", marks: 5},
{name: "Atikrant", marks: 8}];

let totalMarks = marksObj.reduce((acc, item) => {
    return acc + item.marks;
}, 0);

console.log(totalMarks);