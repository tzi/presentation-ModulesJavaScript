// Definition - File `output.js`
function outputModuleGenerator(media) {

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
logger.log = outputModuleGenerator(console.log);
logger.error = outputModuleGenerator(alert);
logger.log.push('La').push('Cuisine').push('Du').push('Web').output();
logger.error.push('Isolated').push('JavaScript').push('FTW').output();