let score = "Deepti"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" - 33
// "33abc" , "Deepti", undefined - NaN
//null - 0 
//true - 1

let isLoggedIn = "deepti"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 - true
// "" - false
// "deepti" - true

let someNumber = 33
 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************Operations***************

let value = 4
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "hello"
let str2 = " deepti"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//prints 122
console.log(1 + 2 + "2"); //prints32


console.log(+true); //prints 1
console.log(+"");//prints 0

let gameCount = 100
gameCount++ //first use then increment
console.log(gameCount);
++gameCount //first increment then use
console.log(gameCount);











