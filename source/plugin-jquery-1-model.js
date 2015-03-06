// Definition - File `jquery.myPlugin.js`
(function ($) {
    $.fn.myPlugin = function () {
        return this.each(function () {
            // [...] The plugin code where `this` is every element
        });
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('#query').myPlugin();