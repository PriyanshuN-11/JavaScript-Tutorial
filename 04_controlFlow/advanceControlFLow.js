//falsy value
let a = 0
a= -0
a= ""
a = NaN
a= null
a= undefined
a= false

//truthy value
a= []
a= {}
a= function(){}
a= " "
a= "false"
a= true
if(a){

    console.log("there is a number")
}
else {
    console.log("there is not number")
}

//check if array and obj is empty

const myObj = {}

if (Object.keys(myObj).length===0){
    console.log("object is empty")
}

const myArray = []
if (myArray.length ===0 ){
    console.log("array is empty")
}

//nullish coalescing operator (??)

let value1 = 51 ?? 10
value1 = null ?? undefined
value1 = -21??12
value1 = null ?? 21 ?? 20
console.log(value1)

//ternary operator (?)
 let priceIce = 1999

 priceIce >1999 ? console.log("price is more than 1999"): console.log("price is 1999")

 const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")