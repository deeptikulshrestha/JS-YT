let myDate = new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString()); //Sun Sep 01 2024
console.log(myDate.toISOString()); // 2024-09-01
console.log(myDate.toLocaleDateString()); //9/1/2024
console.log(typeof myDate);


let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));


