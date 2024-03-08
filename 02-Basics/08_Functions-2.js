// Rest Operator:  The rest operator (...) in JavaScript is a feature that allows you to represent an indefinite number of arguments as an array. It is often used in function parameters to handle a variable number of arguments.

function calculateCartPrice(item1, item2, ...restAllItems) {
    // item1 and item2 are regular parameters.
    // restAllItems is an array containing all remaining arguments.
    console.log(item1);
    console.log(item2);
    console.log(restAllItems);
}

let totalAmount = calculateCartPrice(100, 200, 150, 270, 500);