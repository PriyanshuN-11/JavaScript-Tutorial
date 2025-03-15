//named iife
(function firstMessage(){
    console.log("DB connected")
})();

(
    () => {
        console.log("welcome to iife")
    }
)();




//simple iife or no named iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')