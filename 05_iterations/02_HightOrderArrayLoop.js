// filter() method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let number = myNums.filter(function(a) {
    return a <5
})
console.log(number)

//or 
const newNum = []

 myNums.forEach( (num) => {
     if (num > 4) {
        newNum.push(num)
    }
} )
console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let bookworm = books.filter((aa)=>{
    return  aa.publish >=2000 || aa.edition === 1989
})
console.log(bookworm)


// map method

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);

//chanining method 
const newNu = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNu);


//reduce() method
const mNums = [1, 2, 3]

let total = mNums.reduce(
    function(aaa,ccc){
        console.log(aaa ,ccc)
        return aaa + ccc
    },0
)

const shoppingCart = [
    {
        itemName: "js course",
        price: 5
    },
    {
        itemName: "py course",
        price: 10
    }, 
    {
        itemName: "mobile dev course",
        price: 10
    },
    {
        itemName: "data science course",
        price: 5
    },
]

total = shoppingCart.reduce((ac,cv)=>
ac+cv.price,0)
console.log(total)
