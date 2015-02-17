bespoke.horizontal.from('article');

var editorMap = [];

document.addEventListener('DOMContentLoaded', function(){
	$$('.code').forEach(function(form) {
		var formName = form.name;
	    var editor = ace.edit(form.querySelector('.code__editor'));
	    editor.setTheme("ace/theme/xcode");
	    editor.setFontSize(20);
	    editor.getSession().setMode("ace/mode/javascript");
	    editorMap[formName] = editor;
	});

	$$('.code').forEach(function(form) {
		var formName = form.name;
		form.addEventListener('submit', function(event){
			event.preventDefault();
			var code = editorMap[formName].getSession().getValue();
			safeEval(code, console);
		}, false);
	});
})

function $$(selector, context) {
	context = context||document;
    return Array.prototype.slice.call(context.querySelectorAll(selector), 0);
}

function safeEval(code, console) {
	console = console||window.console;
	try {
	    eval(code); 
	} catch (e) {
	    if (e instanceof SyntaxError) {
	        console.log(e.message);
	    } else {
	        throw( e );
	    }
	}
}

function getConsoleByName(formName) {
}