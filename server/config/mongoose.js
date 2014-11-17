var mongoose = require('mongoose'),
  userModel = require('../models/User'), 
  courseModel = require('../models/Course');

module.exports = function(config){
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error cannot connect!...'));
    db.once('open', function callback(){
      console.log('multivision databse is opened');
    }); 

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
};

