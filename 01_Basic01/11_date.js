/** DATE **/

/*
1. date is a object in js used to work with date and time value
2. it includes the method to get , manipulate and format date and time values
3. under the hood it stores time as a millisecond  since 1 jan 1970 ( utc) ( unix epoch)
4. tc39 is working on temporal a new data and time date because  date has been a long standing pain point in ECMAScript
*/

// declaring a date datatype

let a = new Date  () // return the full date and time elapsed since 1 jan 1970
 
let b = Date.now() // return the number of millisecond elapsed since 1 jan 1970

//date method
 
//1. to string()  // full date including date, time and timezone
console.log(a.toString())

//2. to datestring() // full date including date only
console.log(a.toDateString())

//3. to local string() // full date including date, time only
console.log(a.toLocaleString())

let newDate = new Date(2026, 1, 12, 6, 59, 50)  // (yyyy, mm, dd, hh, mm, ss) and month start from 0
console.log(newDate.toLocaleString())


//options object inside toLocaleString() — this is advanced
console.log(newDate.toLocaleString('default', {
    timeStyle: "medium",
}))

let newDate2 = new Date("01-14-2023") //is not officially standardized in JavaScript.
console.log(newDate2.toDateString())

//date now

let newDateNow = Date.now() // time in millisecond elapsed since 1 jan 1970
console.log(newDateNow)

let second =newDateNow/1000
let min = second /60
let hour = min/60
let day = hour/24
let year = day/365
console.log(year)

// get time
console.log(newDate.getTime())

//get month
console.log(newDate.getMonth()) //+1 because month start from 0 in indexing

//get day
console.log(newDate.getDay())

//get date
console.log(newDate.getDate())

console.log(newDate.toLocaleString())