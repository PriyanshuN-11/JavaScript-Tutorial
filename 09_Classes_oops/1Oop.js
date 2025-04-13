/* OBJECT LITERAL */
//The simplest way to create an object, Not reusable
// No class, no constructor — just a direct object
//this Keyword: Refers to the current context . Inside an object method, this refers to the object itself. However, in a global context (like a browser), this refers to the window object .

const userDetail = {
    userName :"priyanshu",
    loginCount : 10 ,
    greetingFunction : function(){
         //console.log("hello")
        console.log(`hello ${this.userName}`) 
        // console.log(this)
        } 
    }
    console.log(userDetail.userName)
    console.log(userDetail.greetingFunction())

/* CONSTRUCTTOR FUNCTION */
// Used to create multiple objects ,Reusable
// Works with new keyword
/*
What happens when you use new?
A new empty object is created. 
A constructor function is called because of the new keyword.
The this keyword is bound to this new object, and arguments are injected.
The object is returned to the variable.
*/

function userDetail2 (userName, loginCount, isloggeedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isloggeedIn = isloggeedIn;
    return this
}

const userDetailOne = new userDetail2("priyanshu", 40, true)
const userDetaialTwo = new userDetail2("negii", 40, true)
console.log(userDetailOne)
console.log(userDetaialTwo)

function userDetail3 (userName, loginCount, isloggeedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isloggeedIn = isloggeedIn;
    this.greetingFunction = function (){
        console.log(`welcome ${this.userName                        }`)
    }
    return this

}

const userDetailOne1 = new userDetail3("priyanshu", 40, true)
const userDetaialTwo2 = new userDetail3("negii", 40, true)
console.log(userDetailOne1)
console.log(userDetaialTwo2)
console.log(userDetailOne1.constructor) //refrence of its own
//instance of
