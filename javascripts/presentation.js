bespoke.horizontal.from('article');

// Remove page navigation from space in editor
$$('.editor').forEach(function(element){
	element.addEventListener('keydown', function(e){
		var key = e.which;
		if (key === 32) {
		e.stopPropagation();
		}
	}, false);
});

// Use full selector
function $$(selector, context) {
	context = context||document;
    return Array.prototype.slice.call(context.querySelectorAll(selector), 0);
}