let cities = ["Shimla", "Chandigarh", "Delhi"];
let countries = ["India", "USA"];

// cities.push(countries);   // push() function updates the array.
// console.log(cities);   // Output: ['Shimla', 'Chandigarh', 'Delhi', ['India', 'USA']]

// let myArr1 = cities.concat(countries);   // concat() function does not update the array, but return a new array.
// console.log(myArr1);   // Output: ['Shimla', 'Chandigarh', 'Delhi', 'India', 'USA']

// let myArr2 = [...cities, ...countries];
// console.log(myArr2);   // Output: ['Shimla', 'Chandigarh', 'Delhi', 'India', 'USA']

let myArr3 = [1, 2, [3, 4], [5, 6, [7, 8, 9]]];
// myArr3 = myArr3.flat(1);   // [1, 2, 3, 4, 5, 6, [7, 8, 9]]
// myArr3 = myArr3.flat(2);   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(myArr3);

console.log(Array.from("Arpit"));   // Output: ['A', 'r', 'p', 'i', 't']

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   // Output: [100, 200, 300]