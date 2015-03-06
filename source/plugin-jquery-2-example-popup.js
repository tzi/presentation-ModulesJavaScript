// Definition - File `jquery.sharePopup.js`
(function ($) {
    var defaultOptions = {
        width: 640,
        height: 280
    };
    $.fn.sharePopup = function (options) {
        options = $.extend({}, defaultOptions, options);
        return this.each(function () {
            var $button = $(this);
            $button.on('click', function () {
                window.open($button.attr('href'), "", "width=" + options.width + ", height=" + options.height);
                return false;
            });
        });
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.twitterC').sharePopup({height: 400});