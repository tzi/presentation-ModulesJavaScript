// Definition - File `myModule.js`
define(['dependency1', 'dependency2'], function myDeclaration(dependency1, dependency2) {
    "use strict";

    return function myGenerator(argument1, argument2) {
        
        // [...] The module code
        function myService1() {}

        function myService2() {}

        // Return a set of function
        return {
            myService1: myService1,
            myService2: myService2
            // [...]
        };
    };
});

// Usage - File `main.js`
// [...]
var myGenerator = require("myModule");
var myModule = myGenerator(argument1, argument2);