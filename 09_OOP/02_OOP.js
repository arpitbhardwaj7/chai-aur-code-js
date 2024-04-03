// 'User()' is a constructor.
function User(userName, age, college) {
    this.userName = userName;
    this.age = age;
    this.college = college;
    this.country = 'India';
    this.greet = function () {
        console.log(`Hello, ${this.userName}.`)
    }
}

let user1 = new User('Arpit Bhardwaj', 23, 'UIT Shimla');
let user2 = new User('Prashant Gautam', 23, 'IIIT Allahabad');
console.log(user1);
console.log(user2);
user1.greet();