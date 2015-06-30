// Definition - File `jquery.sharePopup.js`
(function ($) {
    $.fn.sharePopup = function () {
        this.each(function () {
            var $button = $(this);
            $button.on('click', function (event) {
                event.preventDefault();
                window.open($button.attr('href'), "", "width=640, height=280");
            });
        });
        return this;
    };
})(jQuery);

// Usage - File `main.js`
// [...]
jQuery('.twitter1').sharePopup();