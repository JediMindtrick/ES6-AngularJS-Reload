var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
reload = require('reload');
var bodyParser = require('body-parser');

var app = express();
//middleware
app.set('views', path.join(__dirname, 'spa'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, 'spa')));
app.engine('html', require('ejs').renderFile);

//foo
//routes
app.get('/', function(req, res) {
  res.render('index.html');
});

//start
var server = app.listen(8080);

//add live reload functionality
console.log('listening on ' + 8080);
