const user = {
    username: "Deepti",
    price:"999",

    welcomeMessage : function(){
          console.log(`${this.username},welcome to my website`);
          
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this); //returns empty object , in browser we get window object this can be used only in objects

//func using arrow func

const chai = () => {
    let username = "deeepti"
    console.log(this.username);
    
}

chai()


/*const addTwo = (num1,num2) => {
    return num1 + num2
}


console.log(addTwo(6,9));
*/


//OR
const addTwo = (num1,num2) =>  (num1 + num2) //({username:"deepti"})



console.log(addTwo(6,9));
