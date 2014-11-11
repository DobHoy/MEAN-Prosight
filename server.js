var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);

console.log('listening on port ' + config.port +'...');


// if(env === 'development')
//   mongoose.connect('mongodb://localhost/multivision');
// else
//   mongoose.connect('mongodb://dobhoy:multivision@ds051630.mongolab.com:51630/multivision');

// mongoose.connect(config.db);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error cannot connect!...'));
// db.once('open', function callback(){
//   console.log('multivision databse is opened');
// }); 

// var messageSchema = mongoose.Schema({message: String});
// var Message = mongoose.model('Message', messageSchema);
// var mongoMessage;
// Message.findOne().exec(function(err, messageDoc){
//   console.log("hi i got logged");
//   mongoMessage = messageDoc.message;
//   console.log("message is " + mongoMessage);
// });

// app.get('/partials/*', function(req, res){
//   res.render('../../public/app/' + req.params[0]);
// });

// app.get('*', function(req, res){
//   // res.render('index', {
//   //   mongoMessage: mongoMessage
//   // });
//   res.render('index');
// });

// var port = process.env.PORT || 3030;

