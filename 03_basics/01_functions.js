function sayMyName(){
    console.log("My Name is Deepti");
    
}

sayMyName()

//Add two Numbers
function addTwo(num1,num2){
    console.log(num1+num2);
    
}

addTwo(2,7)


function loginUserMessage(username ="sam"
){
/*if(!username) */   if(username===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in` 
}


console.log(loginUserMessage()); //no value passed returns undefined


