const myHeros = ["shakti", "batman", "krish"]
const marvel_heroes = ["Thor", "Ironman", "Spiderman"]


//push can also do the same
const newArray = marvel_heroes.concat(myHeros)
console.log(newArray);


const newHeros = [...marvel_heroes, ...myHeros] //concats both
console.log(newHeros);

const newArr = [3,4,[3,5,[6,7,[8,9]]]]
const realNewArr = newArr.flat(Infinity)
console.log(realNewArr);


console.log(Array.isArray("Deepti"))
console.log(Array.from("Deepti"));
console.log(Array.from({name : "Deepti"})); //interesting


