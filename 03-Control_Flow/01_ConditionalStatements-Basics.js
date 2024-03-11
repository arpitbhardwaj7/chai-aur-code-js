let age = 23;
let voterCardIssued = false;

if(age >= 18 && voterCardIssued == true) {
    console.log("You can vote.");
} else if(age >= 18 && voterCardIssued == false) {
    console.log("You cannot vote as you don't have a voter card.");
} else {
    console.log("You cannot vote.");
}