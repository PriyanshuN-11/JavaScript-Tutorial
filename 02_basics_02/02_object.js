/** OBJECT **/
/*
1.an obejct is a collection of properties. each and every properties is a key value pair
2. key also called as property name is always a string and value can be anything 
*/

// declaring object

//1. object literal

let newObject = {
    name : "priyanshu",
    "class name": "hello"
}

//2. object constructor ( signleton object )
let newObject2 = new Object()

newObject2.name = "priyanshu"
console.log(newObject2)

//accessing  object value
//1. dot notation
console.log(newObject.name)

//2. backet notation
console.log(newObject["class name"])

// changing object value
newObject.name = "world";
console.log(newObject)

//adding a new key value pair
newObject.college = "mdu"
newObject["phone Number"] = 95825924451

console.log(newObject)

//prevent any changes in object
Object.freeze(newObject2)

/** ADDING AND ACCESSING DIFFERENT DATATYPES IN OBJECT **/

/* adding and accesssing symbol in object */
//adding
let sym = Symbol('hello')
newObject[sym] = "world";
console.log(newObject)

let newObject3 = {
    name : "byebye",
    [sym] : "hello3"
}
console.log(newObject3)

//accessing
console.log(newObject3[sym])

/* adding and accesssing function in object */
//adding
newObject3.b =function(){
    console.log("noo")
}

//accessing
console.log(newObject3.b)
console.log(newObject3.b())

// this ( this is used to access current object )

newObject3.a = function(){
    console.log(` this is my${this.name}`)
}

console.log(newObject3.a())


/* adding and accesssing object in object */
//adding

// let addObject = {newObject,newObject2}
// console.log(addObject)

//spread opearator
let addobject = {...newObject, ...newObject2}
console.log(addobject)

//assign
let addobject2 = Object.assign({}, newObject2, newObject)
console.log(addobject2)

/* Nested object */

let nested = {
    name : "priyanshu",
    college :{ mdu : "ditm"}
}

// if we know the structure
console.log(nested.college.mdu)

//if we dont know the structure 
console.log(nested.college?.mdu)

//hasownproperty check if the obje have that specific key or not
console.log(nested.hasOwnProperty("hello"))
console.log(nested.hasOwnProperty("college"))

/* convert object into array  */
//when we get value from database we get them as   a arrray of object

//1. object.key
console.log(Object.keys(newObject))

//2. object.value
console.log(Object.values(newObject))

//3. object.entries ( the key value is a pair of array)
console.log(Object.entries(newObject))

/* object destructuring */
//object destructuring is a feature in js that allows us to extract values from an object and store them in a variable

let objectde = {
    name:"priyasnhu",
    class: 12
}

// normal way to access
console.log(objectde.name);
console.log(objectde["class"])


//using destructuring

const { class : variableName} = objectde
console.log(variableName)