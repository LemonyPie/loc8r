module.exports.homeList = function(req, res){
  res.render('locations-list', { 
    title: 'Loc8r - find places to work with wi-fi near you!',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find nice places to work with wi-fi near you!'
    },
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
      distance: '100m'
    },
    {
      name: 'Timespace',
      address: '130 High Street, Reading, RG6 1PS',
      rating: 5,
      facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi', 'Lectures', 'Free snacks'],
      distance: '200m'
    },{
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food'],
      distance: '350m'
    }]
  });
}
module.exports.locationInfo = function(req, res){
  res.render('location-info', { title: 'Location Info' });
}
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
}