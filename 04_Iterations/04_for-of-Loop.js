// Example-1
let nums = [1, 2, 3, 4, 5];

for(let num of nums) {
    console.log(num);
    num++;
}

// Values are not updated.
console.log(nums);   // Output: [1, 2, 3, 4, 5]

console.log();

// Example-2
let name = "Arpit Bhardwaj";
for(let ch of name) {
    console.log(ch);
}

console.log();

// Example-3
let mp = new Map();
mp.set("India", " New Delhi");
mp.set("USA", "Washington DC");
mp.set("Nepal", "Kathmandu");

console.log(mp);

for(let item of mp) {
    console.log(item);
}

for(let [key, value] of mp) {
    console.log(`${key} => ${value}`);
}

// Example-4
// for-of loop does not work for objects.
/*
let student = {
    name: "Arpit",
    city: "Shimla"
};

for(let item of student) {
    console.log(item);
}
*/