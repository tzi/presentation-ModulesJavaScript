(function(){
	var editorMap = [];

	document.addEventListener('DOMContentLoaded', init, false);

	function run(form) {
		var code = editorMap[form.name].getSession().getValue();
		var console = getConsole(form);
		console.clear();
		safeEval(code, console);
		console.updateStatus();

		function safeEval(code, console) {
			console = console||window.console;
			try {
			    eval(code); 
			} catch (e) {
		        console.error(e.message);
				console.updateStatus();
			}
		}
	}

	function init() {
		var editorElementList = $$('.editor');

		editorElementList.forEach(function(form, index) {
			form.name = 'editor'+index;
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
			form.addEventListener('keydown', function(event) {
				if (event.which === 13 && event.ctrlKey) {
					run(form);
				}
			}, false);
			form.querySelector('[value="clear"]').addEventListener('click', function(event){
				event.preventDefault();
				var console = getConsole(form);
				console.clear();
			}, false);
		});
	}

	function getConsole(form) {
		var logContainer = form.querySelector('.console__log');
		var statusContainer = form.querySelector('.console__status');
		return {
			updateStatus: function() {
				var status = [];
				status.push(getNowLabel());
				if (logContainer.querySelector('.log--error')) {
					status.push('1 error');
					statusContainer.classList.add('console__status--error');
				} else {
					status.push(logContainer.childNodes.length + ' messages');
					statusContainer.classList.remove('console__status--error');
				}
				statusContainer.innerHTML = status.join(' - ');
			},
			log: function(message) {
				messageList = Array.prototype.slice.call(arguments, 0);
				messageList.forEach(function(m, i){
					if (m === '') {
					    messageList[i] = '<i>empty string</i>';
					}
					if (typeof m == "undefined") {
					    messageList[i] = '<i>undefined</i>';
					}
					if (m === null) {
					    messageList[i] = '<i>null</i>';
					}
				});
				message = messageList.join(', ');
				logContainer.innerHTML += '<li class="log log--message">'+message+'</li>';
			},
			error: function(error) {
				logContainer.innerHTML += '<li class="log log--error">/!\\ '+error+'</li>';
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