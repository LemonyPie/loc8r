const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const password = fs.readFileSync(appRoot + '/password.cfg', 'utf-8');

let dbURI = 'mongodb+srv://Artemee:' + password + '@loc8r-tuchw.gcp.mongodb.net/test?retryWrites=true';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});