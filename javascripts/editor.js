(function(){
	var editorMap = [];

	document.addEventListener('DOMContentLoaded', init, false);

	function run(form) {
		var code = editorMap[form.name].getSession().getValue();
		var console = getConsole(form);
		console.clear();
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
		var editorElementList = $$('.editor');

		editorElementList.forEach(function(form) {
			var code = form.innerHTML.trim();
			var html = [];
			html.push('<div class="editor__code">'+code+'</div>');
			html.push('<div class="editor__console console">');
				html.push('<div class="console__action">');
					html.push('<div class="console__status"></div>');
					html.push('<button type="button" value="clear">Clear</button>');
					html.push('<button>Run</button>');
				html.push('</div>');	
				html.push('<ul  class="console__log"></ul>');
			html.push('</div>');	
			form.innerHTML= html.join('');	
		});

		editorElementList.forEach(function(form) {
			var formName = form.name;
		    var editor = ace.edit(form.querySelector('.editor__code'));
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
		var logContainer = form.querySelector('.console__log');
		var statusContainer = form.querySelector('.console__status');
		return {
			log: function(message) {
	    		message = Array.prototype.slice.call(arguments, 0).join(', ');
				var status = [];
				status.push(getNowLabel());
				status.push((logContainer.childNodes.length + 1) + ' messages');
				statusContainer.innerHTML = status.join(' - ');
				logContainer.innerHTML += '<li>'+message+'</li>';
			},
			clear: function() {
				statusContainer.innerHTML = '';
				logContainer.innerHTML = '';
			}
		}
		function getNowLabel() {
			var now = new Date();
			var date = [];
			date.push(zeroPad(now.getHours()));
			date.push(zeroPad(now.getMinutes()));
			date.push(zeroPad(now.getSeconds()));
			return date.join(':');

			function zeroPad(num) {
			    var s = num+"";
			    while (s.length < 2) s = "0" + s;
			    return s;
			}
		}
	}
})();