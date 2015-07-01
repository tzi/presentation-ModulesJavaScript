// Definition - File `output.js`
var outputConstructor = (function outputDeclaration(media) {
    "use strict";

    return function outputConstructorF(prefix) {
        // [...] The module code
        var buffer = [];

        function push(value) {
            buffer.push(value);
            return this;
        }

        function output() {
            buffer.unshift(prefix);
            media(buffer.join(' '));
            rule();
            buffer = [];
        }

        function rule() {
            media('----------------');
        }

        // Expose the service in the ask set
        return {
            push: push,
            output: output
        };
    }
})(console.log);

// File `main.js` or in another module !
// [...]
var logger = {};
logger.log = outputConstructor('INFO: ');
logger.error = outputConstructor('ERROR: ');
logger.log.push('Brown').push('Bag').push('Lunch').output();
logger.error.push('Isolated').push('JavaScript').push('FTW').output();