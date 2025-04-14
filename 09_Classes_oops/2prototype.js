/* PROTOTYPE */
// javascript default behaviour is prototyple 

let arrymyHero =  [ "batman", "superman"]

let heroRace = {
    batman : "human",
    superman : "alien",
    getbatmanRace : function (){
        console.log(`batman is ${this.batman}`)
    }
}
console.log(heroRace.getbatmanRace())

Object.prototype.priyanshu = function (){
    console.log('this is present in all object')
}

Array.prototype.heypriyanshu = function (){
    console.log('priyanshu say hello')
}

heroRace.priyanshu()
arrymyHero.priyanshu()

// heroRace.heypriyanshu()
arrymyHero.heypriyanshu()


//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

//old Way (outdated)
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   //refrence this to teachingsupport
}

Teacher.__proto__= User  //teacher can access user 

//modern way
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "priyanshu negi"

String.prototype.trueLength = function (){
     console.log(`${this}`)
    console.log(`${this.name}`)
     console.log(`true lenght is ${this.trim().length  }`)
}
anotherUserName.trueLength()

"hello".trueLength()