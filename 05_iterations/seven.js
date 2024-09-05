const arr = [1,3,4]
const newArr= arr.map((num)=> num*num)
console.log(newArr);

///chaining

const newNum = arr.filter((num)=> num>1).map((num)=> num*num)
console.log(newNum);


//reduce
const i = 0;
const sum = arr.reduce((ans,current)=>ans+current,i)
console.log(sum);
