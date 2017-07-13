$(function () {
    fetch('/api/categories')
        .then((res) => {
            return res.json();
        })
        .then((categories) => {
            var names = categories.map((cat) => cat.name);
            console.log(names);
            $("#autocomplete").typeahead({ source: names });
        });
});
