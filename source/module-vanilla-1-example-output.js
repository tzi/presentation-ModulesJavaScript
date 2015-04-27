// Definition - File `output.js`
var outputModule = (function () {
    "use strict";

    // [...] The module code
    function output(str) {
        console.log(str);
    }

    // Return the main service function
    return output;
})();

// Usage - File `main.js`
// [...]
outputModule('BrownBagLunch');