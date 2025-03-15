/** FUNCTION **/
/*
1. a function is a block of code dessigned to perform a task or calculate value
2. it run only when it is called invoke function
3. function help in reusing code, organizing program and reducing repetition
*/

/* declaring a function */
//1. basic function
function greeting(){
    console.log("hello world")
}
greeting() // function is invoked

//2. function with parameter
function addition (a,b){
    console.log(a+b)
}
addition(30,45)

//3. function with return
function addition2 (a,b){
    return a+b
}
console.log(addition2(34,324))

function division (a,b){
    console.log(a/b)
}
division(60,5)
// when return statement id excetued inside a function the function immediately stop running and send the value back to the palce where the function is called ( invoked)

function comparision (a,b){
    if(a===b){
        return console.log("a is equal to b")
    }
    else{
        return console.log("a is not equal to b")
    }
}
comparision(234,423)

function logIn (username) {
    if (username !== undefined){
    return `${username} loggedin`
    }
    else{
       return "enter username"
    }
}
console.log(logIn())

function logIn2 (username = "noname") { //"noName" is a default value (used if no argument is passed)
    if (username !== undefined){
    console.log(`${username} loggedin`)
    }
    else{
        console.log("enter username")
    }
}
logIn2("h")