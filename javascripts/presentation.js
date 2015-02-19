require(
    ['bespoke', 'bespoke-classes', 'bespoke-keys', 'bespoke-touch', 'bespoke-hash'],
    function(bespoke, classes, keys, touch, hash) {
        var deck = bespoke.from('article', [
            classes(),
            keys('horizontal'),
            touch(),
            hash()
        ]);
        
        // Initialize code editor 
        var editorElementList = $$('.editor');
        editorModule.init(editorElementList);

        // Remove page navigation triggered by space kay down in code editor
        editorElementList.forEach(function(element){
            element.addEventListener('keydown', function(event){
                if (event.which === 32) {
                    event.stopPropagation();
                }
            }, false);
        });

        // Useful selector
        function $$(selector, context) {
            context = context||document;
            return Array.prototype.slice.call(context.querySelectorAll(selector), 0);
        }
    }
);