const code = [1,3,4,5,6,2,4,67,10]
//for each doesnt return anything even if we want to
let newNum = code.filter((num)=> num%2==0)
console.log(newNum);

const book = [
    {
        bookname: "Book1", genre: "History" , publish: 2000
    },
    {
        bookname: "Book2", genre: "science" , publish: 2004
    },
    {
        bookname: "Book3", genre: "fiction" , publish: 1900
    },
    {
        bookname: "Book4", genre: "science" , publish: 2100
    },
    {
        bookname: "Book5", genre: "History" , publish: 1800
    },

]

let userBooks = book.filter((bk)=> bk.genre==="History")
console.log(userBooks);
