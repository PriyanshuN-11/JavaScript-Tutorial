/** ARRAY **/
/*
1. an array is special variable used to store multiple value in a single variable.
2. js array are resizable and can contain mix of different datatypes
3. js array copy operations create shallow copy ( shallow copy of an object is copy whose properties share the same refrence and deep copy does not share the same refrence)
4. accessing of the value start from 0 []
*/

//declaring
let newArray = [1, "priyanshu", true, null , undefined , 32434n ,Symbol("hello"), {name:"priyanshu"}, function greet (){console.log("hello")}]

console.table([typeof newArray[5],typeof newArray[6],typeof newArray[7],typeof newArray[8]])

let sym = Symbol("hello")
let newArray2 = new Array(1, "priyanshu", true, null, [sym] )
console.log(typeof newArray2[4])

// array method

//1. push
newArray.push("hello")
console.log(newArray)

//2. pop
newArray.pop()
console.log(newArray)
newArray2.pop()

//3. unshift
newArray.unshift("world")
console.log(newArray)

//4. shift 
newArray.shift()
console.log(newArray)

//5. includes
console.log(newArray.includes("hello"))
console.log(newArray.includes("priyanshu"))

//6. index of ( -1 because value is not given)
console.log(newArray.indexOf(null))
console.log(newArray.indexOf("hero")) 

//7. join()
let JoinArray = newArray2.join()
console.log(JoinArray)

//8. slice ( last range is not included) ( created a deep copy)
console.log(newArray.slice(0,4))
console.log(newArray)

//9. splice ( last range is included) ( create shallow copy)
 console.log(newArray.splice(6,9))
 console.log(newArray)

 //10. concat() or spread operator (...)

 /*
 newArray.push(newArray2)
 console.log(newArray)
 */

 let concatArray = newArray.concat(newArray2)
 console.log(concatArray)

 let spreadArray = [...newArray, ...newArray2]
 console.log(spreadArray)

 //11. flat

let nestArray = ["we", 21 ,[null, undefined, [3423, "hello world"]]]
console.log(nestArray.flat())
console.log(nestArray.flat(2))

//12. Array.isArray ( true or false)

console.log(Array.isArray(nestArray))

//13. Array.from ( converts into array)
let myName = "priyanshu"  //Array.from() works with Strings ,Arrays ,Set / Map ,Objects with length  not number
console.log(Array.from(myName))

//14. Array.of
console.log(Array.of(myName, newArray,nestArray))

//15. reverse()
console.log(newArray.reverse())