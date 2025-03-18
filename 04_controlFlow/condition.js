//conditional statement if 
let userLogIN = true

if (userLogIN){
    console.log("user Logged In")
}


// if else statement
let roomTemperature = 41;

if (roomTemperature <=41){
    console.log("temperature is less than or equal to 41")
}
else {
    console.log("temperature is greater than 41")
}


let table = 40

if (table){
    let score = 40
    console.log(`the score is ${score}`)
}
// console.log(`the score is ${score}`) this will not work because of block scope


//short hand for if
let score =100
if (score >=12) console.log("hello world") , console.log("hello india");

//else if

let  money = 1000

if (money <= 200){
    console.log("money is less than or equal to 200")
}
else if(1000 < money >=500 ){
console.log("money is in range of between 1000 and 500")
}
else if ( 1000 === money){
    console.log("money is 1000")
}
else if (money >= 1000){
    console.log("money is more or equal to 1000")
}
else {
    console.log("money is empty")
}


// logical operator
let usernumber = true
let userEmail = false
let userFile = true

if (userLogIN && usernumber || userEmail)
{
    console.log("user is in our database")
}

if (!userEmail){
    console.log("please fill you email")
}