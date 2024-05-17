const accountID = 12345;
let accountEmail = "arpitbhardwaj.711@gmail.com";
var accountPassword = "12345";
accountCity = "Shimla";
var accountState;

// Difference between 'var' and 'let': 'var' has function scope whereas 'let' has block scope. Prefer 'let' over 'var'.
// 'const' has a block scope.

// accountID = 789;   // Constant variable can't be modified.

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "arpitbhardwaj@google.com";
accountPassword = "54321";
accountCity = "Prayagraj";

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);