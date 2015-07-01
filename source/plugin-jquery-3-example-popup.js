// Definition - File `jquery.sharePopup.js`
(function ($) {
    var defaultOptions = {
        width: 640,
        height: 280
    };
    var pluginConstructor = function sharePopup($button, options) {
        "use strict";
        
        $button.on('click', function (event) {
            event.preventDefault();
            window.open($button.attr('href'), "", "width=" + options.width + ", height=" + options.height);
        });

        function open() {
            $button.click();
        }

        return {
            open: open
        }
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
jQuery('.twitter3').sharePopup({height: 450});
// [...]
jQuery('.twitter3').sharePopup('open');