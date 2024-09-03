//Singleton object => one instance

const tinder = new Object()
console.log(tinder);


// Non singleton
const tind2 =  {}
tind2.id = "123abc"
tind2.name = "Deepti"
tind2.isLoggedIn = true
console.log(tind2);
console.log(Object.keys(tind2));
console.log(Object.values(tind2));
console.log(tind2.hasOwnProperty('isLoggedIn'));




const regUser = {
    email: "abc@123.com",
    fullname: {
        userfullname : {
            firstname : "Deepti",
            lastname : "Kulshrestha"
        }
    }
}

console.log(regUser.fullname.userfullname);

//combining obj

const obj1= {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);


const user = [
    {
        email : "abc@1234.com",
        name1: "Deep"
    },
    {

    },
]

console.log(user[0]);
