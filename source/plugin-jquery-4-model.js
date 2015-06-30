// Definition - File `sharePopup.js`
var myGenerator = (function yDeclaration($){
    "use strict";

    var defaultOptions = {
        // [...] The plugin default options
    };

    return function sharePopupGeneratorF(selector, options) {

        options = $.extend(true, {}, defaultOptions, options);
        
        // [...] The module code with `selector` to query elements
        
        function myService1() {}
        
        function myService2() {}

        // Return a set of function
        return {
            myService1: myService1,
            myService2: myService2
            // [...]
        };
    }
})(jQuery);

// Usage - File `main.js`
// [...]
var twitterModule = sharePopupGenerator('.twitter4', {height: 400});
// [...]
twitterModule.open();