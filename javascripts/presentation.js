bespoke.horizontal.from('article');

// Remove page navigation trigerred by space kay down in code editor
$$('.editor').forEach(function(element){
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