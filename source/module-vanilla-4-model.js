// Definition - File `myModule.js`
function myGenerator(dependency1, dependency2) {
    "use strict";

    // [...] The module code
    function myService1() {}

    function myService2() {}

    // Return a set of function
    return {
        myService1: myService1,
        myService2: myService2
        // [...]
    };
}

// Usage - File `main.js` or in another module !
// [...]
var myModule = myGenerator(dependency1, dependency2);
myModule.myService1(option1, option2);