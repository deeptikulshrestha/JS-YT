const accountId = 14434
let accountEmail = "deepti@gmail.com"
var accountPassword = "12345"
accountCity = "Haryana" //not to be used
let accountState;

//accountId = 2 //not allowed

console.log(accountId);
/* 
prefer not to use var
becuz of issue in block scope and functional scope */

accountEmail = "dc@gmail.com"
accountPassword= "3455"
accountCity = "jaipur"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
