// Definition - File `myModule.js`
function myModuleGenerator() {
    "use strict";

    // [...] The module code
    function myService1() {
    }

    function myService2() {
    }

    // Return a set of function
    return {
        myService1: myService1,
        myService2: myService2
        // [...]
    };
}

// Usage - File `main.js` or in another module !
// [...]
var myModule = myModuleGenerator();
myModule.myService1(arg1, arg2);