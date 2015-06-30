(function () {
    'use strict';
    // Access global variables
    foo = "bar";
    // Failing assignements
    NaN = 5;
    // Delete undeletable properties
    delete Object.prototype;
    // Double parameter name
    function sum(x, x) {}
    // ...
})();