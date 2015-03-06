// Definition -File `output.js`
var outputModule = (function () {

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
outputModule.push('La').push('Cuisine').push('Du').push('Web').output();