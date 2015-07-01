// Definition - File `output.js`
define("multi-output", [], function outputDeclaration() {
    "use strict";

    return function outputConstructor(media) {

        // [...] The module code
        var buffer = [];

        function push(value) {
            buffer.push(value);
            return this;
        }

        function output() {
            media(buffer.join(' '));
            buffer = [];
        }

        // Expose the service in the ask set
        return {
            push: push,
            output: output
        };
    }
});

// Usage - In another module
require(['multi-output'], function (loggerConstructor) {
    var logger = loggerConstructor(console.log);
    logger.push('Brown').push('Bag').push('Lunch').output();
});

// Usage - File `main.js`
require(['require'], function (require) {
    var logger = require('multi-output')(alert);
    logger.push('Isolated').push('JavaScript').push('FTW').output();
});