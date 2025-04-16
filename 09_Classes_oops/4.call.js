function setUsername (username){
    this.username = username
    console.log("called")

}
function createUser ( username ,  password, email){
    setUsername.call(this, username)
    
    this.email = email 
    this.password = password
}

const priyanshu = new createUser("priyasnhu", "negi@", "213")
console.log(priyanshu)
/*
The video provides a real-world scenario of a createUser function that outsources the task of setting a username to another function, SetUsername

The Problematic Code:

JavaScript
function SetUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    SetUsername(username); // This context will be lost! [00:07:52]
    this.email = email;
    this.password = password;
}
The Solution with .call(): [11:43]

JavaScript
function createUser(username, email, password){
    // We pass 'this' (the current object) so SetUsername uses OUR context
    SetUsername.call(this, username); 
    
    this.email = email;
    this.password = password;
}
*/