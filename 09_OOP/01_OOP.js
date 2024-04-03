let user = {
    userName: "Arpit Bhardwaj",
    age: 23,
    college: "IIIT Allahabad",
    getUserDetails: function () {
        console.log(`User ${this.userName} of age ${this.age} studies at ${this.college}.`);
    }
};

console.log(user);
console.log(user.college);
console.log(user.getUserDetails());