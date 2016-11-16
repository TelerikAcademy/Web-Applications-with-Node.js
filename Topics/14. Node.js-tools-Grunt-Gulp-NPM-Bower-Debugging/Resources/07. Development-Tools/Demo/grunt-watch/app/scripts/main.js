(function () {
	setInterval(function () {
		$('#timer').html(
			$('<p></p>').html(
				'Ping at ' + moment().format(' HH:mm:ss')
			)
		);
	}, 700);
}());