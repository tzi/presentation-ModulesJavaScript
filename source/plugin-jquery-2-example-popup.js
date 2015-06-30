// Definition - File `jquery.sharePopup.js`
(function ($) {
    var defaultOptions = {
        width: 640,
        height: 280
    };
    $.fn.sharePopup = function (options) {
        options = $.extend({}, defaultOptions, options);
        this.each(function () {
            var $button = $(this);
            $button.on('click', function (event) {
                event.preventDefault();
                window.open($button.attr('href'), "", "width=" + options.width + ", height=" + options.height);
            });
        });
        return this;
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.twitter2').sharePopup({height: 400});