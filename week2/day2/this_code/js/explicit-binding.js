// the foo function just logs out the value of 'a' inside of whatever this is
function foo() {
  console.log(this.a);
}

// 'obj' is just an Object containing one key/value pair
var obj = {
  a: 2
};

// 'car' is just an Object containing one key/value pair
var car = {
  a: 'Skoda'
}

// When we use 'call' on a function we can pass it the value of 'this'
// so, the first example will log out 2
foo.call(obj);
// the second example will log out 'Skoda'
foo.call(car); 
// The reason is that inside of the foo function, we are logging out 'this.a'
// and they both contain the key 'a'