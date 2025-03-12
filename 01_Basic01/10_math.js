/** MATH **/

/*
1. math is a built in object in js , it provide method and properties to perform mathematical task 
*/

//1. abs ( converts negative to positive )
console.log(Math.abs(-90))

//2. round  ( x>5 we get lower value decimal) ( x <= 5 we get upper value of decimal)
console.log(Math.round(1.2))
console.log(Math.round(1.5))
console.log(Math.random(1.7))

//3. ciel ( we get upper value of decimal)
console.log(Math.ceil(1.7))
console.log(Math.ceil(1.2))

//4. floor ( we get lower value of decimal)
console.log(Math.floor(1.9))
console.log(Math.floor(1.3))

//5. min
console.log(Math.min(-2,-1,0,1,2))

//max
console.log(Math.max(-2,-1,0,1,2))

//random  ( when we use random we get random value 0 <= x < 1 )
console.log(Math.random())

// random value between 1 and 10

console.log(Math.random())  // 0 <= x < 1
console.log(Math.random()*10)  // 0 < = x  < 10
console.log(Math.random()*10)  // 0 < = x 10
console.log(Math.floor((Math.random()*10)+1))  // 1 < = x < = 10

//example 2. number b/w max and min

let max =100

let min  = 80

let range = max-min

console.log(Math.random())  // 0 <= x < 1
console.log(Math.random()*(range+1))  // 0 < = x  < 21
console.log((Math.random()*(range+1))+min)  // 80 < = x  < 101
console.log(Math.floor((Math.random()*(range+1))+min))  // 80 < = x  < = 100
