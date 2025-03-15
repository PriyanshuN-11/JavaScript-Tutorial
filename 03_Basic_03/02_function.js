/** FUNCION WITH OBJECT AND ARRAY **/

//function with more than one parameter and arguments ( we use rest operator )
function SchoolClass (...class1){
    console.log(class1)
}
SchoolClass("priyanshu", "aman" , "raman")
// //we use rest parameter to pass more than one parameter in function and it will return an array of all the parameters passed in the function

function SchoolClass2 (class1, class2, class3){
    console.log(class3)
}
SchoolClass2("priyanshu", "aman" , "raman")

//A rest parameter must be last in a parameter list.
function SchoolClass3 (class1, class2, ...class3){
    console.log(class3)
}
SchoolClass3("priyanshu", "aman" , "raman","raman")


// Functions with objects in javascript
let studentDetail ={
Name : "priyanshu",
class :12,
course : "Arts"

}
function studentDetailFunction (details){
    console.log(`student name is ${studentDetail.Name} and class is ${studentDetail.class}`)
}
studentDetailFunction()

function studentDetailFunction4 (details){
    console.log(`student name is ${details.Name} and class is ${details.class}`)
}
studentDetailFunction4(studentDetail)

// above obj have separate variable but in this object is inside function

function studentDetailFunction2 (details2){
console.log(`student name is ${details2.Name} and class is ${details2.class}`)
}
studentDetailFunction2(
    {
        Name : "priyanshu",
        class :12,
        course : "Arts" 
    }
)


// // Functions with array in javascript

let cartoon = ["pokemon", "bheem", "doremon"]

function cartoonFunction (details){
    console.log(details[2])
}
cartoonFunction(cartoon)

// above array have separate variable but in this array is inside function


function arraydetails2(arrays2){
    console.log(arrays2[2])
}
console.log(
    arraydetails2(["mobile", "laptop", "tv", "fridge", "washing machine"])
)