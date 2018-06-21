const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.locationsCreate = function(req, res){
  sendJsonResponse(res, 200, { "status" : "success" });
}