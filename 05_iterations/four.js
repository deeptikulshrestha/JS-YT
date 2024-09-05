//iterating in objects

//for in

const obj = {
    name:"Deepti",
    age: 14,
    email: "123jahdhsll"
}

for(const key in obj){
    console.log(`${key} for object is ${obj[key]}`);
    
}

const lang = ["js", "python","java","c++"]
for(const key in lang){
    console.log(lang[key]);
    
}