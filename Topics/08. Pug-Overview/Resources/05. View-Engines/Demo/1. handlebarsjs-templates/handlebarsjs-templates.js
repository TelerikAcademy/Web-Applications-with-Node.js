(function () {
	var templateText,
		template,
		model;

	templateText = document.getElementById('mustaches-list-template').innerHTML;
	template = Handlebars.compile(templateText);

	model = {
		title: 'What is your mustache?',
		types: [
			'Hungarian', 'Dali', 'Imperial', 'Freestyle', 'Fu Manchu', 'Pancho Villa', 'Handlebar',
			'Horseshoe', 'Chevron', 'English', 'Mexican', 'Pencil', 'Toothbrush'
		]
	};

	var mustachesList = template(model);
	document.getElementById('mustaches-container').innerHTML = mustachesList;

}());