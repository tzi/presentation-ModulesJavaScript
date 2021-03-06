// Definition - File `jquery.myPlugin.js`
(function ($) {
    
    var defaultOptions = {
        // [...] The plugin default options
    };
    var pluginConstructor = function myPlugin($container, options) {
        "use strict";

        // [...] The module code with `$container` is every element
        
        function myService1() {}

        function myService2() {}

        // Return a set of function
        return {
            myAction1: myService1,
            myAction2: myService2
            // [...]
        };
    };

    // jQuery plugin encapsulation 
    var pluginName = pluginConstructor.name;
    $.fn[pluginName] = function (action) {
        if (typeof action !== 'string') {
            var options = $.extend(true, {}, defaultOptions, action);
            this.each(function () {
                this[pluginName] = pluginConstructor($(this), options);
            });
        } else {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                this[pluginName][action].apply(this[pluginName], args);
            });
        }
        return this;
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.query').myPlugin({option1: value1});
// [...]
jQuery('.query').myPlugin('myAction1', argument1);