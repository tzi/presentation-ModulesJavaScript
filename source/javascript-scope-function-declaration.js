console.log(typeof foo1);

// Declared function: Interpreted on compilation time
function foo1() {}

// Anonymous assigned function: Interpreted only on Runtime
var foo2 = function () {};

// Named assigned function: Have a name in stack traces
var foo3 = function foo3F() {};