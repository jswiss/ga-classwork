// The thing below is a constructor function
function Foo(number) {
  // 'this' refers to the current instance of Foo we just created
  // and all that we will create in the future
  this.a = number;
}

// creating a new Foo and assigning to bar
var bar = new Foo(2);
// logging out the 'a' attribute on bar
console.log(bar.a);