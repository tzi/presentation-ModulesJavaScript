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

// Usage - In another module
require(['output'], function (logger) {
    logger.push('Brown').push('Bag').push('Lunch').output();
});

// Usage - File `main.js`
require(['require'], function (require) {
    var logger = require('output');
    logger.push('Isolated').push('JavaScript').push('FTW').output();
});