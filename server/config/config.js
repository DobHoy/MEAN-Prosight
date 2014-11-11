var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
  // 2 differnet keys, one for each environment 

  development:{
    rootPath: rootPath,
    db: 'mongodb://localhost/multivision', 
    port: process.env.PORT || 3030
  }, 
  production:{
    rootPath: rootPath,
    db: 'mongodb://dobhoy:multivision@ds051630.mongolab.com:51630/multivision',
    port: process.env.PORT || 80
  }
};