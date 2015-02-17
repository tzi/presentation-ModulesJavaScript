(function(){
	var editorMap = [];

	document.addEventListener('DOMContentLoaded', init, false);

	function run(form) {
		var code = editorMap[form.name].getSession().getValue();
		var console = getConsole(form);
		safeEval(code, console);

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
	}

	function init() {
		var codeElementList = $$('.code');

		codeElementList.forEach(function(form) {
			var code = form.innerHTML.trim();
			var html = [];
			html.push('<div class="code__editor">'+code+'</div>');
			html.push('<div class="code__action">');
				html.push('<div class="code__status"></div>');
				html.push('<button type="button" value="clear">Clear</button>');
				html.push('<button>Run</button>');
			html.push('</div>');	
			html.push('<ul  class="code__console"></ul>');
			form.innerHTML= html.join('');	
		});

		codeElementList.forEach(function(form) {
			console.log(form);
			var formName = form.name;
		    var editor = ace.edit(form.querySelector('.code__editor'));
		    editor.setTheme("ace/theme/xcode");
		    editor.setFontSize(20);
		    editor.getSession().setMode("ace/mode/javascript");
		    editorMap[formName] = editor;

			form.addEventListener('submit', function(event) {
				event.preventDefault();
				run(form);
			}, false);
			form.querySelector('[value="clear"]').addEventListener('click', function(event){
				event.preventDefault();
				var console = getConsole(form);
				console.clear();
			}, false);
		});

		function $$(selector, context) {
			context = context||document;
		    return Array.prototype.slice.call(context.querySelectorAll(selector), 0);
		}
	}

	function getConsole(form) {
		var logContainer = form.querySelector('.code__console');
		var statusContainer = form.querySelector('.code__status');
		return {
			log: function(message) {
	    		message = Array.prototype.slice.call(arguments, 0).join(', ');
				statusContainer.innerHTML = (logContainer.childNodes.length + 1) + ' messages';
				logContainer.innerHTML += '<li>'+message+'</li>';
			},
			clear: function() {
				statusContainer.innerHTML = '';
				logContainer.innerHTML = '';
			}
		}
	}
})();