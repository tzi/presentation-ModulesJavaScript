// Definition - File `myModule.js`
define(['dependency1', 'dependency2'], function (dependency1, dependency2) {
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
});

// Usage - File `main.js`
// [...]
var myModule = require("myModule");