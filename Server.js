//Dependencies

var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
var uristring = 
  process.env.MONGODB_URI || 
  'mongodb://test:test1@ds021046.mlab.com:21046/heroku_g4j7v88m';
  
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});
//Express

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) 
{ res.header('Access-Control-Allow-Origin', "*"); 
res.header('Access-Control-Allow-Methods','GET');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 next();
});

//Routes
app.use('/api', require('./routes/api'))




//Start Server
app.listen(3000);
console.log("API Is listen on port 3000")

//nbuib