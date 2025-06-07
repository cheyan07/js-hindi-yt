const accountld = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ewkf@gmail.com"
accountPassword="614"
accountCity="pune"

console.log(accountld);
/* 
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountld,accountEmail,accountPassword,accountCity,accountState])