// Definition - File `output.js`
function outputGenerator(media) {
    "use strict";

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

// File `main.js` or in another module !
// [...]
var logger = {};
logger.log = outputGenerator(console.log);
logger.error = outputGenerator(alert);
logger.log.push('Brown').push('Bag').push('Lunch').output();
logger.error.push('Isolated').push('JavaScript').push('FTW').output();