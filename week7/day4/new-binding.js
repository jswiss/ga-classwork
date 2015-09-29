function Foo(a) {
	this.a = a;
}

//instead of foo being called on the window (window.foo()), new allows foo to be called like (new foo())

var bar = new foo(2);

console.log(bar.a); //2