// Definition - File `myModule.js`
var myGenerator = (function myDeclaration(dependency1, dependency2) {
    "use strict";
    
    return function myGeneratorF(argument1, argument2) {

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
})(dependency1, dependency2);

// Usage - File `main.js` or in another module !
// [...]
var myModule = myGenerator(argument1, argument2);
myModule.myService1(option1, option2);