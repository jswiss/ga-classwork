var my = require("./my-module");

console.log("Number is " + typeof number);

// console.log("Name is " + name); //will not work!
console.log("Name is " + my.name); //WILL  work!

console.log("The number is " + my.getNumber()) //this works too! remembers number because of the getNumber function, which serves as a closure, which stores number even though it is not called

console.log(my); // returns an object of name, arr, and getNumber