// Primitive => call by value - changes in copy 

// 7 types = > String, Number , Boolean , null , undefined , Symbol, BigInt

// Javascript is dynamically typed no need to define type of variables explicitly

let id = Symbol('123')
console.log(id);
console.log(typeof id); //symbol


let bigNumber = 1526526388729479739227n
console.log(bigNumber);
console.log(typeof bigNumber);



// Reference type => Non Primitive

// Array ,Objects , functions

const heros = [ "shaktiman" , "batman"];

console.log(heros);

let myObj = {
name : "Deepti",
age: 20,
}

console.log(myObj);


const myFunction = function(){
    console.log("Hi Javascript");
    
}

console.log(typeof myFunction);//function
console.log(typeof myObj); //object
console.log(typeof heros); //object





