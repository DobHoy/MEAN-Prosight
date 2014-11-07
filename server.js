var express = require('express'),
  stylus = require('stylus'), 
  logger = require('morgan'), 
  bodyParser = require('body-parser'), 
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
  return stylus(str).set('filename', path);

};

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));

// app.use(bodyParser());

// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));

app.use(express.static(__dirname + '/public'));

if(env === 'development')
  mongoose.connect('mongodb://localhost/multivision');
else
  mongoose.connect('mongodb://dobhoy:multivision@ds051630.mongolab.com:51630/multivision');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error cannot connect!...'));
db.once('open', function callback(){
  console.log('multivision databse is opened');
}); 

// var messageSchema = mongoose.Schema({message: String});
// var Message = mongoose.model('Message', messageSchema);
// var mongoMessage;
// Message.findOne().exec(function(err, messageDoc){
//   console.log("hi i got logged");
//   mongoMessage = messageDoc.message;
//   console.log("message is " + mongoMessage);
// });

app.get('/partials/*', function(req, res){
  res.render('../../public/app/' + req.params[0]);
});

app.get('*', function(req, res){
  // res.render('index', {
  //   mongoMessage: mongoMessage
  // });
  res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('listening on port ' + port +'...');
