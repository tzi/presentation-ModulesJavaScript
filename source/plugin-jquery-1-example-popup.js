// Definition - File `jquery.sharePopup.js`
(function ($) {
    $.fn.sharePopup = function (options) {
        return this.each(function () {
            var $button = $(this);
            $button.on('click', function () {
                window.open($button.attr('href'), "", "width=640, height=280");
                return false;
            });
        });
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.twitterB').sharePopup();