//multiple arguments

function calcCartPrice(val1,val2,...num){
    return num

}

console.log(calcCartPrice(200,300,400,450));

const course = {
    name: "js in hindi",
    price: "999",
    courseInst : "Hitesh"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price} and Instructor is ${anyobject.courseInst}`);
    
}

handleObject(course)

//forr array

const arr = [2,4,5,6,7,6]
function returnArray(getArray){
    return getArray[0]
}

console.log(returnArray(arr
));
