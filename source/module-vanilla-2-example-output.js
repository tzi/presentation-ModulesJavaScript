// Definition -File `output.js`
var outputModule = (function outputConstructor() {
    "use strict";

    // [...] The module code
    var buffer = [];

    function push(value) {
        buffer.push(value);
        return this;
    }

    function output() {
        console.log(buffer.join(' '));
        buffer = [];
    }

    // Return a set of function
    return {
        push: push,
        output: output
    };
})();

// Usage - File `main.js`
// [...]
outputModule.push('Brown').push('Bag').push('Lunch').output();
