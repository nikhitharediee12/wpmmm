module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'foodie - a place where you can see the reviews of food',
        pageHeader: {
            title: 'foodie',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'koi and co',
            address: 'sainikpuri,hyd',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'live music'],
            distance: '100m'
        }, {
            name: 'coffee cup',
            address: 'banjarahills,hyd',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'coffee'],
            distance: '200m'
        }, {
            name: 'Burger king',
            address: 'uppal,hyd',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};