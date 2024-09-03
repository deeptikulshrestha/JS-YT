//Immediately Invoked Function Expressions (IIFE)
//there occurs pollution due to global scope , various variables get polluted so to remove that we user iife

//named iife
(function chai(){
console.log('DB CONNECTED');

})( );


//unnamed iife
( (name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('Deepti');
