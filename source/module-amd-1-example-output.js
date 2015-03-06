// Definition - File `output.js`
define("output", [], function () {

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
});

// File `main.js` or in another module !
// [...]
require(['require', 'output'], function (require) {
    var logger = require('output');
    logger.push('La').push('Cuisine').push('Du').push('Web').output();
});