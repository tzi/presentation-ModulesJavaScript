// Definition - File `sharePopup.js`
var sharePopupGenerator = (function sharePopupDeclaration($){
    "use strict";

    var defaultOptions = {
        width: 640,
        height: 280
    };
    
    return function sharePopupGeneratorF(selector, options) {

        options = $.extend(true, {}, defaultOptions, options);
        $(document).on('click', selector, function (event) {
            event.preventDefault();
            openLink($(this));
        });

        function open() {
            openLink($(selector));
        }

        function openLink($link) {
            window.open($link.attr('href'), "", "width=" + options.width + ", height=" + options.height);
        }

        return {
            open: open
        }
    }
})(jQuery);

// Usage - File `main.js`
// [...]
var twitterModule = sharePopupGenerator('.twitter4', {height: 400});
// [...]
twitterModule.open();