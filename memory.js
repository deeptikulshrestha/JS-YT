//Primitive => Stack gives copy

// Non Primitive => Heap changes original value

let myName = "Deepti Kulshrestha"

let anotherName = myName
anotherName = "Deepti"

console.log(anotherName); //copy changed
console.log(myName); //original not changed

let myObj = {
    name: "Deepsy",
    age:20,
}

let myObjTwo = myObj

myObjTwo.name = "Hitesh"

console.log(myObj.name); //hitesh original changes
console.log(myObjTwo.name); //hitesh

