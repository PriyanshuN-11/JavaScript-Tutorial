class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email, 
        this.password = password
    }

    changePassword (password){
        return this.password
    }
    changeUsername (username){
        return(`username is ${this.username.toUpperCase()}`)
    }
}
const chai = new user("priyanshu", "negi", "@fgaf")

console.log(chai.changePassword())
console.log(chai.changeUsername())

// behind the scene

function user (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.changeuser = function (){
    return this.username
}
user.prototype.passwordChange = function (){
    return this.password
}
const tea = new user ("PRIYANSHU", "LUMAAR@","23234")

console.log(tea.changeuser())