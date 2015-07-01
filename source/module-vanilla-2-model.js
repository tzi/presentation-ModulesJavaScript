// Definition - File `myModule.js`
var myModule = (function myConstructor() {
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
})();

// Usage - File `main.js`
// [...]
myModule.myService1(option1, option2);