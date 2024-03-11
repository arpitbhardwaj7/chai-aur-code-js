// Example-1
let student = {
    name: "Arpit",
    city: "Shimla",
    college: "IIIT Allahabad"
};

for(let key in student) {
    console.log(`Key: ${key}, Value:  ${student[key]}`);
}

console.log();

// Example-2
let nums = [1, 2, 3, 4, 5];

for(let key in nums) {
    console.log(`Key: ${key}, Value: ${nums[key]}`);
}

// Values are not updated.
console.log(nums);   // Output: [1, 2, 3, 4, 5]

// Example-3
// for-in loop does not work for map.
/*
let mp = new Map();
mp.set("India", "New Delhi");
mp.set("USA", "Washington DC");
mp.set("Nepal", "Kathmandu");

for(let item in mp) {
    console.log(mp);
}
*/