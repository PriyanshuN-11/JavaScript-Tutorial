 class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email (value){
        this._email = value;
    }

      get password(){
        return this._password.toUpperCase()
    }
    set password (value){
        this._password = value
 }
}

 const priyanshu = new user ("negi@", "123f")

 console.log(priyanshu.email)
 console.log(priyanshu.password)