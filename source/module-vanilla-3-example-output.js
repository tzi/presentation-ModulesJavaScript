// Definition - File `output.js`
function outputModuleGenerator() {
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

    // Expose the service in the ask set
    return {
        push: push,
        output: output
    };
};

// Usage - File `main.js` or in another module !
// [...]
var outputModule = outputModuleGenerator();
outputModule.push('La').push('Brown').push('Bag').push('Lunch').output();
// or
var modules = {};
modules.outputModule = outputModuleGenerator();
modules.outputModule.push('Isolated').push('JavaScript').push('FTW').output();