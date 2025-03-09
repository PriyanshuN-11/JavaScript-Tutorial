/** DATATYPES **/

"Use Strict" // treat all js code as newer version
// alert("hello") this is only used in browser not in node js ,used to show alert message

/*
1. code readability should be high
2. dataype represent different kinds of values that can be stored and manipulated in a program 
3. datatype are of two type 
4. primitive (string, number, boolean, undefined, null, symbol, bigint 
*/

let newNumber = 2342;
let newString = "priyanshu";
let newBigInt = 23432n;
let newBoolean = true;
let newUndefined = undefined;
let newNull = null;
let newSymbol = Symbol("priyanshu");

console.log(typeof(newSymbol))
console.table({newNumber : typeof(newNumber), newString: typeof(newString), newBoolean : typeof(newBoolean), newNull : typeof(newNull), newUndefined: typeof(newUndefined), newBigInt: typeof(newBigInt)})
// typeof is operator in js used to check the datatype of a value