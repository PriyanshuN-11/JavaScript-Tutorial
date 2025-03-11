/** STRINGS **/


/*
1. string is a sequence of charachter thaat can be used to represent text
2. prototype is an object in js that contain all string method
3. every string is a object under the hood even it look primitive
4. all string method are a part of str protoytpe object
5. when we do str. any method it look into prototype for that method 
 */


// string can be written in 
let a = "hello" // double quotes
let b = 'world' // single quotes
let c = `hello ${b}` // string interboleationb
console.table({
    a:a,
    b:b,
    c:c,
})


// declaring a string
a = "hello"
b = String("world")
c = new String ("hello world") // helps in accessing the prototype
console.log(a)
console.log(b)
console.log(c)


// methods in string
let newString = "Priyanshu Negi"

// 1. accessing the key value pair
console.log(newString[3])

//2. lenght
console.log(newString.length)

//3. touppercase()
console.log(newString.toUpperCase())

//4. tolowercase()
console.log(newString.toLowerCase())

//5. charat()
console.log(newString.charAt(4))

//6. indexof()
console.log(newString.indexOf("y"))

//7. substring()
console.log(newString.substring(0,4))

//8. trim
let trimString = " hello world  "
console.log(trimString.trim())

//9. slice()
console.log(newString.slice(0,-6))

//10. replace()
console.log(newString.replace("y","x"))

//11. includes
console.log(newString.includes("y"))

//12. split()
console.log(newString.split("i"))