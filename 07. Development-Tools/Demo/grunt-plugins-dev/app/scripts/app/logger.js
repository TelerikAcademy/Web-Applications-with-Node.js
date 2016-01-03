(function (scope) {

	function log(id, text) {
		document.getElementById(id).innerHTML += '<p>logged: ' + text + '</p>';
	}

	scope.logger = {
		log: log
	};
}(window));