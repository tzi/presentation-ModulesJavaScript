(function () {
    'use strict';
    // Access global variables
    foo = "bar";
    // Failing assignements
    NaN = 5;
    // Delete undeletable properties
    delete Object.prototype;
    // Double property names
    var x = {a: "1", a: "2"};
    // Double parameter name
    function sum(x, x) {}
    // ...
})();