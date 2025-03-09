// // declare a datatype
// let firstData = 32423;
// let secondData = Number(32423)


// //number
// let num = 2343;

// //string
// let car = "hello"

// //boolean 
// let bool = true

// //bigInt 
// let big = 234234234n ;

// //null 
// let none = null

// // undefined
// let un = undefined

// // symbol
// let symbo = Symbol (2334)

// console.table([num,car,big,none, un, bool, symbo])

// //array
// let arr  = [3242, "hello", true, null , undefined, Symbol(34234)]
// console.log(arr)

// //object

// let obb = {
//     name : "priyanshu negi",
//     age: 24,
//     sucessful : true,
// }

// console.log(obb)


// // function
// function greet () {console.log("hello world")};
// greet();

// let greet1 = function(){console.log("hello world")}
// greet1()

/** DATATYPE SUMMARY **/

/*
1. datatype are of two types main based on how it is stored in a memory and how it is accessed
2. call by value passes a copy of a variable to the function so that the changes donot affect the orginal
3. call by refrence pass a memory refence of a variable to the function so that the changes affect the original  
*/

// decalring a variable 
let newNumber = 23423;
newNumber = Number(3242)
newNumber = new Number(3242)
newNumber =3243

//1. primitive
// number
let number = 34234;

// string 
let string = "hello";

//boolean 
let boolean = true;

// null
let null1 = null;

// undefined 
let undefined1 = undefined;

// bigint
let bigint = 2343n;

// symbol
let symbol = Symbol("hello")


//2. non primitive
// array
let arry = [234,"hello", 3243n, null, undefined, true, Symbol("hello")]
console.log(typeof(arry[6]))

//obj
let mySymbol = Symbol("hello world")
let obj = {
    name : "priyanshu",
    clas: 12,
    isLogIn : true,
    email : undefined, 
    isMarried :null,
    id : 3243n,
    [mySymbol]: "hello"
}
  console.log(typeof obj[mySymbol]);

  //function
function ab (){
    return ("HELLO")
}
console.log(ab())

let hb = function (){
    console.log("hello")
}
hb()


console.table([
  { Name: "number", Value: number, Type: typeof number },
  { Name: "string", Value: string, Type: typeof string },
  { Name: "boolean", Value: boolean, Type: typeof boolean },
  { Name: "null", Value: null1, Type: typeof null1 },
  { Name: "undefined", Value: undefined1, Type: typeof undefined1 },
  { Name: "bigint", Value: bigint, Type: typeof bigint },
  { Name: "symbol", Value: symbol.toString(), Type: typeof symbol },

  { Name: "array", Value: arry, Type: typeof arry },
  { Name: "object", Value: obj, Type: typeof obj },
  { Name: "function ab", Value: ab, Type: typeof ab },
  { Name: "function hb", Value: hb, Type: typeof hb }
]);
