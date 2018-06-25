const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const theEarth = (function(){
  const EARTH_RADIUS = 6371; // km
  const getDistanceFromRads = function(rads){
    return parseFloat(rads * EARTH_RADIUS);
  }

  const getRadsFromDistance = function(distance){
    return parseFloat(distance / EARTH_RADIUS);
  }

  return {
    getDistanceFromRads: getDistanceFromRads,
    getRadsFromDistance: getRadsFromDistance
  };
})

const sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.locationsListByDistance = function(req, res){
  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lng);
  const point = {
    type: "Point",
    coordinates: [lng, lat] 
  };
  const geoOptions = {
    spherical: true,
    maxDistance: theEarth.getRadsFromDistance(20),
    num: 10
  }
  Loc.geoNear(point, geoOptions, (err, results, stats) => {
    let locations = [];
    results.forEach((doc)=>{
      locations.push({
        distance: theEarth.getDistanceFromRads(doc.dis),
        name: doc.obj.address,
        rating: doc.obj.rating,
        facilities: doc.obj.facilities,
        _id: doc.obj._id
      });
    });
    sendJsonResponse(res, 200, locations);
  });
  sendJsonResponse(res, 200, { "status" : "success" });
}
module.exports.locationsCreate = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}
module.exports.locationsReadOne = function(req, res){
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
module.exports.locationsUpdateOne = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}
module.exports.locationsDeleteOne = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}