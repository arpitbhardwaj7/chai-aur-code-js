const accountID = 12345;
let accountEmail = "arpitbhardwaj.711@gmail.com";
var accountPassword = "12345";
accountCity = "Shimla";
var accountState;

// Prefer not to use var because of issue in block scope and functional scope.

// accountID = 789;   // Constant variable can't be modified.

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "arpitbhardwaj@google.com";
accountPassword = "54321";
accountCity = "Prayagraj";

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);