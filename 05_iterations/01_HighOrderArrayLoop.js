//for of loop

let arr = [1,2,3,4,5]
for(const a of arr){
    console.log(a)
}

let greet = "hello world"
for(const a of greet){
    console.log(a)
}

//maps in js

let mymap = new Map()
mymap.set("priyanshu","negi")
mymap.set("mansi","negi")
mymap.set("jitendra","negi")
mymap.set("reena","negi")
mymap.set("priyanshu","negi") 

console.log(mymap)

for(const [a,b] of mymap){
    console.log(a,b)
}

//for in loop

let myobj = {
     js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const a in myobj){
    console.log(a)
}


for (const b in arr){
    console.log(b)
}


//for each loop

arr.forEach(function (a){
    console.log("start")
    console.log(a)
})




function hello (a){
console.log(a)
}
arr.forEach(hello)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((ab)=> {
    console.log(ab.languageFileName
    )
})