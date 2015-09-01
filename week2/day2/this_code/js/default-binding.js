function foo() {
  console.log(this.a);
}

var a = 2;

foo(); 
// alert(this);
console.log(this);