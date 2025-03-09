/** DATAYPE CONVERSION **/


/*
[] → gives rows only
{} inside [] → gives columns
 {} → good for just key → value
[ { } ] → best for table with multiple columns (Value + Type)
 */
let a = 1312
a = 0
a = 1
a = "we"
a = undefined
a = null
a = true
a = false
a = "33dv"
a = "3"
a = 4535n

a = [23,324,"fwe"]

a = {
    a:"hello", b: 324
}

a = function (){
    console.log("hello")
}
a()

let newNumber = Number(a)
let newString = String(a)
let newBoolean = Boolean(a)

console.table(
    [{variable : "a",
    value: a,
    typeof : typeof(a)
},{
    variable : "newNumber",
    value: newNumber,
    typeof : typeof(newNumber)
},{
    variable : "newString",
    value: newString,
    typeof : typeof(newString)
},{
    variable : "newBoolean",
    value: newBoolean,
    typeof : typeof(newBoolean)
}])