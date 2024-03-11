// Example-1
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log();

// Example-2
let fruits = ["Apple", "Banana", "Pineapple"];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log();

// Example-3
// break and continue
for(let i = 1; i <= 10; i++) {
    if(i == 5) {
        // break;
        continue;
    }

    console.log(i);
}