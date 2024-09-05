// array specific loops
//for of

const arr = [1,2,3,4,5,6]
for(const num of arr){
    console.log(num);
    
}


const greetings = "Hello World"
for(const greet  of greetings){
    console.log(`Each char is ${greet}`);
    
}

//map

const map = new Map()
map.set('1',"India")
map.set('2',"Jaipur")
console.log(map);

for(const [key,value] of map){
    console.log(key, '->',value); //this logic is not used on objects
    
}

