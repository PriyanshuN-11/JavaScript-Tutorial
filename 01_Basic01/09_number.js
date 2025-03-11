/** NUMBER **/

/*
1. js uses number type to represent both floating-point ( decimal ), intereger numbers
2. every number in js is actually numbner object behind the scene  
3. when we use method on a number js uses number.prototye
*/ 

//method in js

// 1. to string
let a = 2343
console.log( a.toString()) // now the number is converted into string now we can use string method in this number

console.log(a.toString().length)

//2. to fixed()
let b = 56.8
console.log(b.toFixed(3))

//3. to precession
console.log(b.toPrecision(4))
console.log(b.toPrecision(2))

//4. tolocal string
console.log(a.toLocaleString('en-IN'))
