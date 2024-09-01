// singleton when object created from constructor
//Object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Deepti",
    [mySym]: "mykey1",
    age: 20,
    rollNo: 17025,
    email: "deepti@google.com",
    "lastLoginDays" : ["Monday","Tuesday"]
 
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

console.log(jsUser["lastLoginDays"]);

jsUser.email = "deepti@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "deepti@chatgpt.com" // no change after freeze
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js USER");
    }

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(typeof jsUser.greeting());
console.log(typeof jsUser.greetingTwo());






