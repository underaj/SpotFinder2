var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var routes = require('./config/routes.js');
var middleware = require('./config/middleware.js');

var app = express();
app.use(morgan('dev'));
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));
// app.use(express.static(__dirname + '../compiled'));
routes(app);

var port = 3000;
app.listen(port, console.log('listening'));
module.exports = app;