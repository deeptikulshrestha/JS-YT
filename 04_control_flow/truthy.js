//falsy values 
//false, 0 , -0 , BiGInt 0n, "",null,undefined,NaN

//Truthy values

// "0", 'false', " ",[], {}, function(){}

const userEmail = 0n;
if(userEmail){
    console.log("Email entered");
}
else {
    console.log("Email not entered");
}

const myobj = {

}

if(Object.keys(myobj).length == 0){
    console.log("Object is empty");
    
}