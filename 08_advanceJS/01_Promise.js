/** PROMISE**/
/*
1. The promise object represents the eventual completion or failure of an asynchronus operation and its resulting value.

2. A Promise can be in one of three states:
    Pending: The initial state, neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully.
    Rejected: The operation failed.

3. we can use asyn/Await or promise and mostley we consume promise ( fetch ) and rarely make promise

4. when we dont have promise we used asyn / await then developer created q and bluebird these libraries and then we can use fetch after that they were integrated in js

5. promise reduce call back hell
*/

// example 1
// 1. Creating a Promise
// let promise = new Promise() // first step
//resolve() → success
// reject() → error
let promiseOne = new Promise(function (resolve, reject){
       //Do an async task
        // DB calls, cryptography, network
    setTimeout(function (){
        console.log(" Async task is complete")
        resolve(); // used to connect this with then 
    }, 1000)
})

// 2. Consuming a Promise (.then())
//.then() runs only when resolve() is called
promiseOne.then( function (){
    console.log("promise Consumed");
});

// example 2 promise without variable 
new Promise ( function(resolve, reject){
    setTimeout(() => {
        console.log("async2 task complete")
        resolve()
    }, 1000);
}).then( function(){
    console.log("promise complete")
})

//example 3 Passing Data in Promise
const promiseThree = new Promise( (resolve, reject)=> {
    setTimeout(() => {
        resolve({username : "priyanshu" , useremail : "negip548@gmail.com"})
    }, 1000);
})
promiseThree.then((user) => {
    console.log(user)
})

//example 4 Consuming a Promise (.catch()) 
//.catch() handles reject()

const promiseFour = new Promise ( (resolve, reject)=>{
    setTimeout(() => {
        let error = true
         if (!error){
            resolve({username : "priyanshu" , useremail : "negip548@gmail.com"})
         }
         else{
            reject("something went wrong")
         }
    }, 1000);
})
promiseFour.then( (user)=>{
    console.log(user);
    return user.username
})
.catch((errorr)=> {
    console.log(errorr)
})

// example 5   Promise Chaining
// Each .then() returns a new promise

let promiseFive = new Promise ( (resolve, reject)=> {
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username : "negi" , useremail : "negip548@gmail.com"})
        }
        else{
            reject("something went wrong")
        } 
    },1000)
})
.then( (user)=>{
    return user.username
}).then((username)=>{
    console.log(username)
})
.catch((ab)=>{
    console.log(ab)
})

// example 6 promise .finally()
//Runs always

let promisesix = new Promise ( (resolve, reject)=> {
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username : "yupp" , useremail : "negip548@gmail.com"})
        }
        else{
            reject("something went wrong")
        } 
    },1000)
})
.then( (user)=>{
    return user.username
}).then((username)=>{
    console.log(username)
})
.catch((ab)=>{
    console.log(ab)
})
.finally(()=> {
    console.log("the promise is either resolved or rejected")
})

// example 7  Async / Await (Modern Way)
//async → always returns a promise
//await → waits for result
//Use try...catch for errors

const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve("promise is resolved")
        } else {
            reject("promise is rejected")
        }
    }, 1000);
});
/*
async function abc() {
    let response = await proimiseSix
    console.log(response)
}
abc()
*/
//but for error we use try and catch

async function abc() {
    try {
        const response = await promiseSix
        console.log(response)
    } catch (errorrr) {
        console.log(errorrr)
    }
}

abc()

// example 8 consumtation of promise using fetch
/*
async function hello() {
    try{
        const response = await fetch ( "https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    }
    catch(abc){
        console.lo(abc, "342")
    }
}
hello()
*/
fetch("https://jsonplaceholder.typicode.com/users")
.then((asdfa)=>{
    return asdfa.json()
})
.then ((data)=>{
    console.log(data)
})
.catch ((error)=>{
    console.log(error)
})

