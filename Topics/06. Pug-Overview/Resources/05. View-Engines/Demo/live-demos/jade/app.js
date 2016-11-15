var jade = require('jade');
var fs = require('fs');

fs.readFile('index.jade', 'UTF8',
	function (err, templateHTML) {
		var template =
			jade.compile(templateHTML, {
				pretty: true
			});
		var model = {
			title: 'Model Title',
			url: 'http://gosho.net',
			types: [
				'pesho',
				'gosho',
				'stamat'
			]
		};

		var readyHTML = template(model);

		fs.writeFile('index.html', readyHTML, 'UTF8', function (err) {
			console.log('File written');
		});



	});