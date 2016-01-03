exports.index = function (req, res) {
    res.render('home/index', { title: 'Home Page'});
};

exports.contact = function (req, res) {
    res.render('home/contact', { email: 'mail@company.com', telephone: '1-800-EXPRESS'});
};




