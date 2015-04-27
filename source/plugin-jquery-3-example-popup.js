// Definition - File `jquery.sharePopup.js`
(function ($) {
    var defaultOptions = {
        width: 640,
        height: 280
    };
    var pluginGenerator = function sharePopup($button, options) {
        "use strict";
        
        $button.on('click', function () {
            window.open($button.attr('href'), "", "width=" + options.width + ", height=" + options.height);
            return false;
        });

        function open() {
            $button.click();
        }

        return {
            open: open
        }
    };

    // jQuery plugin encapsulation 
    var pluginName = pluginGenerator.name;
    $.fn[pluginName] = function (action) {
        if (typeof action !== 'string') {
            var options = $.extend(true, {}, defaultOptions, action);
            this.each(function () {
                this[pluginName] = pluginGenerator($(this), options);
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
jQuery('.twitterD').sharePopup({height: 400});
// [...]
jQuery('.twitterD').sharePopup('open');