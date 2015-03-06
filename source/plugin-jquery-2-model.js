// Definition - File `jquery.myPlugin.js`
(function ($) {
    var defaultOptions = {
        // [...] The plugin default options
    };
    $.fn.myPlugin = function (options) {
        options = $.extend({}, defaultOptions, options);
        return this.each(function () {
            // [...] The plugin code with `this` is every element
        });
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.query').myPlugin({option1: value1, option2: value2});