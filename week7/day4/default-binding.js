function foo() {

	'use strict';

	console.log(this.a);
}

var a = 2; //a is global scope

foo();  //TypeError: 'this' is 'undefined'
