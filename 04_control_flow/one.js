//if

const isUserLoggedIn = true;

if(isUserLoggedIn){
    console.log("The user just logged in");
    
}


// if else

const age = 60;
if(age>18)  console.log("Eligible to vote");
else  console.log("Not Eligible to vote");

//if else if

if(age>18 && age<50) console.log("You are adult");
else if(age<18) console.log("You are minor");
else console.log("You are old");


//switch

const weekDay = 7;
switch(weekDay){
    case 1 : console.log("Monday");
    break;
    case 2 : console.log("Tuesday");
    break;
    case 3 : console.log("Wednesday");
    break;
    case 4 : console.log("Thursday");
    break;
    case 5 : console.log("Friday");
    break;
    case 6 : console.log("Saturday");
    break;
    case 7 : console.log("Sunday");
    break;
    default : console.log("Invalid Input");
    break;

}