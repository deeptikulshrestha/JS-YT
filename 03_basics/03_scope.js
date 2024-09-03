
//var c = 300
//global scope
let a = 500


if(true){
    let a = 10
    const b = 2
    //var c =4 //avoid var
    console.log(a); //local scope
    
}

console.log(a);
//console.log(b);


function one(){
    const username = "deepti"

    function two(){
        const website = "Youtube"
        console.log(username);
       }
       //console.log(website);

       two()
       
}

one()


//if else

if(true){
    const username1 = "hitesh"
    if(username1==="hitesh"){
        const web = " youtube"
        console.log(username1 + web);
        console.log(web);
        
    }
    
    console.log(username1);  
}

//**********Interesting******************* */

function addone(value){
    return value +1
}

console.log(addone(8));

//addTwo(9) gives error
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(8));
