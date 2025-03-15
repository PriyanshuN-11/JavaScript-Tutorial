const myobj = {
     name: "John",
    age: 30, 
    welcome :  function (){
        console.log(`${this.name} is ${this.age} years old`)
    }
}
myobj.welcome()
myobj.name = "Priyanshu"
myobj.age = 20
myobj.welcome()


console.log(this)  // it will print the global object because this is in global scope

function myFunction(){
    console.log(this)
}
myFunction()
// it will print the global object because this is in global scope


// this will not work in function  it will work in obje only

function myFunction2(){
    let username = "Priyanshu"
    console.log(this.username) // it will print undefined because this is in function scope and it will not affect the global variable username
}
myFunction2()
