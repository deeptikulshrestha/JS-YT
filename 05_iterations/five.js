//for each
function printMe(item){
    console.log(item);
    
}
const code = ["js", "py","c", "c++"]

//code.forEach( (item,index,arr) => { console.log(item,index,arr)});

code.forEach(printMe)

const coding = [ 
    {
        langname:"js",
        langext: ".js"

    },
    {
        langloc: "ajkdasnmn/kwmedk"
    },
    {

    },
]

coding.forEach((item)=> {
    console.log(item.langext);
    
})