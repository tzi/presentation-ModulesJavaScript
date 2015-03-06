// Definition - File `jquery.myPlugin.js`
(function($) {

    // default options
    var defaultOptions = {
        // [...] The plugin default options
    };

    $.fn.myPlugin = function(action) {
        if (typeof action !== 'string') {
            var options = $.extend(true, {}, defaultOptions, action);
            this.each(function() {
                this.myPlugin = myPluginGenerator(this, options);
            });
        } else {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                this.myPlugin[action].apply(this.myPlugin, args);
            });
        }
        return this;
    }

    function myPluginGenerator(container, options) {

        // [...] The module code
        // [...] The plugin code with `container` is every element
        function myService1() {}
        function myService2() {}

        // Return a set of function
        return {
            myAction1: myAction1,
            myAction2: myAction2
            // [...]
        };
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.query').myPlugin({option1: value1});
jQuery('.query').myPlugin('myAction1', argument1);