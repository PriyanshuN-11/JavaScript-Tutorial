//1.global scope

let a = "hello"

//2.function scope

function firstName(){
    let c= "negi"
    console.log(c)
}
firstName()
// console.log(c) // it will give error because c is in function scope and we are trying to access it outside the function
let d = "priyanshu"
function secondName(){
    let d = "jeevan"
    console.log(d)
}

secondName() // it will print jeevan because d is in function scope and it will not affect the global variable d

//3.block scope

if (true){
    let a = "hello world"
    console.log("inner:", a) // it will print hello world because a is in block scope and it will not affect the global variable a

}

console.log("outter:",a)

var vara = "aman"
if (true){
    var vara = "jeevan"
    console.log("inner:", vara) // it will print jeevan because vara is in block scope and it will affect the global variable vara
}
console.log("outter:", vara) // it will print jeevan because vara is in block scope and it will affect the global variable vara

//3. nested function scope

function ab (){
    let a = "dasmodies"
    function b(){
        let b = "priyanshu"
        console.log(a,b)
    }
    b()
    // console.log(b) // it will give error because b is in function scope and we are trying to access it outside the function  
}
ab()


if (true){
    let a = "priyanshu"
    if(a === "priyanshu"){
        let b= "negi"
        console.log(a,b)
    }
    // console.log(b) // it will give error because b is in block scope and we are trying to access it outside the block

}
console.log(a) // it will print priyanshu because a is in block scope and it will not affect the global variable a