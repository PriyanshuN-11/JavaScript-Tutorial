class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class  admin extends user {
    constructor(username, email, password){
        super(username)
        this.email = email 
        this.password = password
    }
    addIteam (){
        console.log(`a new couser was added by ${this.username}`)
    }
}
const chai = new admin ("hello", "herello@", "342dsfs")

chai.addIteam()

const tea  = new user ("padora")

//tea.addIteam() no access
tea.logMe()

console.log(chai === tea);
console.log(chai instanceof user);

//Static Properties
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

