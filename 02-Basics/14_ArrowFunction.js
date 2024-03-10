/*
function addNums(num1, num2) {
    return num1 + num2;
}
*/

// Arrow Function
addNums = (num1, num2) => (num1 + num2);

console.log(addNums(5, 3));

// fun = () => {college: "IIIT Allahabad"};   // Wrong syntax
// fun = () => ({college: "IIIT Allahabad"});   // Correct syntax
fun = () => {   // Also correct syntax
    return {college: "IIIT Allahabad"};
}

console.log(fun());
/*
1. If the arrow function has a single expression, you can use the concise form without curly braces {} and the return keyword. The expression's value is implicitly returned.
2. If there is only one parameter, you can omit the parentheses around the parameter list. However, if there are zero or more than one parameter, parentheses are required.
*/