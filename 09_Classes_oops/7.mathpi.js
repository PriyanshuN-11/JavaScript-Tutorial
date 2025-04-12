
console.log(Math.PI)
//we cannot overwrite math.pi value


const  descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

const newWord = {
    name : "priyanshu negi",
    price : 3000,
    isAvailable :true
}

console.log(newWord)
console.log(Object.getOwnPropertyDescriptor(newWord, "name"))


Object.defineProperty(newWord , "price", {
    writable: false,
    enumerable: false,
  configurable: false
})
console.log(Object.getOwnPropertyDescriptor(newWord, "price"))

for (let [key, value] of Object.entries(newWord)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}