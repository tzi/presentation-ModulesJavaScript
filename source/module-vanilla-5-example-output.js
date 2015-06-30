// Definition - File `output.js`
var outputGenerator = (function outputDeclaration(media) {
    "use strict";
    
    function rule() {
        media('----------------');
    }

    return function outputGeneratorF(prefix) {
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
logger.log = outputGenerator('INFO: ');
logger.error = outputGenerator('ERROR: ');
logger.log.push('Brown').push('Bag').push('Lunch').output();
logger.error.push('Isolated').push('JavaScript').push('FTW').output();