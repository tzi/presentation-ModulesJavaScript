// Definition - File `output.js`
define("output", [], function outputDeclaration() {
    "use strict";

    return function outputGenerator(media) {

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
require(['output'], function (loggerGenerator) {
    var logger = loggerGenerator(console.log);
    logger.push('Brown').push('Bag').push('Lunch').output();
});

// Usage - File `main.js`
require(['require'], function (require) {
    var logger = require('output')(alert);
    logger.push('Isolated').push('JavaScript').push('FTW').output();
});