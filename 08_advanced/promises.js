const promiseOne = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Task Completed");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise 1 consumed")
})

//direct method

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Task 2 Complete!")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Direct Promise Consumed");
    
})


//data in resolve is automatically sent in then
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Deepti",email:"deepti@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
    
})

//using reject
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Deepti",password:"1244"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    }, 1000);
}
).then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promise is either resolved or rejected!");
    
})

//async

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"1244"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
       const response = await promiseFive;
       console.log(response);
       
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()


/*async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
        

    }
    catch(err){
        console.log("e",err);
        
    }

}

getAllUsers()*/

//alternate

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
    
}).then(function(data){
    console.log(data);
    
})
.catch((error)=>console.log(error)
)