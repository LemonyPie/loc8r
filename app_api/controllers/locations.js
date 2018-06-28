const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const _buildLocationList = function(req, res, results, stats) {
  let locations = [];
  results.forEach((doc) => {
    locations.push({
      distance: doc.dis,
      name: doc.obj.name,
      address: doc.obj.address,
      rating: doc.obj.rating,
      facilities: doc.obj.facilities,
      _id: doc.obj._id
    });
  });
  return locations;
};

const sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

const locationsListByDistance = function(req, res){
  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  const maxDistance = parseFloat(req.query.maxDistance);
  const point = {
    type: "Point",
    coordinates: [lng, lat] 
  };
  const geoOptions = {
    spherical: true,
    maxDistance: maxDistance,
    num: 10
  }
  Loc.geoNear(point, geoOptions, (err, results, stats) => {
    const locations = _buildLocationList(req, res, results, stats);
    sendJsonResponse(res, 200, locations);
  });  
}
const locationsCreate = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}
const locationsReadOne = function(req, res){
  if(req.params && req.params.locationid){
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location){
        if(!location){
          sendJsonResponse(res, 404, {
            "message": "locationid not found"
          })
        } else if(err){
          sendJsonResponse(res, 404, err);
        } else {
          sendJsonResponse(res, 200, location);
        }
      })
  } else {
    sendJsonResponse(res, 404, {
      "message": "No locationid in params"
    })
  } 
}
const locationsUpdateOne = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}
const locationsDeleteOne = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
}