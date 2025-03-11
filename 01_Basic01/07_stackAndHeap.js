//stack
let userName = "priyanshu"
let newUserName = userName

console.table([userName,newUserName])

newUserName = "Zedo"
 console.table([userName,newUserName])

//UserName value is not changes because newUserName will get copy of the UserName  because it is in stack memory

//heap
let dataUser = {
    email:"negip5489@gmail.com",
    name:"priyanshu"
}
let newDataUser = dataUser
console.table([dataUser,newDataUser])

newDataUser.email ="theofficalzedo4@gmail.com"

console.table([dataUser,newDataUser])
//dataUser value is changed because newDataUser will get refrence of the Datauser because it is in heap memory

/** STACK AND  HEAP **/


/*
1. in earlier programing language is was our responsibility to manually assign and free memory
2. but in morder programing language we dont have much control over memory management insted we have automatic garbage collection that handle it for use
3. there are two types of memory stack and heap memory
 */


// stack ( stack memory copies value during assignment , it operates on last in first out (LIFO) , fast, fixed size , small memory)
let myName = "priyashu"
let myOtherName = myName
myOtherName = " himashu"
 // so if it was heap then the myname would have chenaged to himashu
 // it is a stack memory so myotherName gets copy of the myname and the myName does not change if we change myOtherName
console.table({
    myName: myName,
    myOtherName: myOtherName

})


// heap (heap memory copies reference addresses during assignment , allocate dynamically and accessed via refrence , larger , slow memory, stored in heap with refrence in stack)
let myData = {
    name : "priyanshu",
    class : 12
}
let myAnotherData = myData
myAnotherData.name = " himanshu"
// if it was stack the value of name would have not changed in mydata because in stack memory we get copy of the value
// but it is in heap memory we get reference so the changes done would affect he 

console.table({
    mydataName : myData.name,
    myAnotherDataName : myAnotherData.name
})