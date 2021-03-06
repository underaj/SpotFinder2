var express = require('express');
var app = express();
var apiRoutes = require('./config/routes.js')(app, express);

var port = 3000;

// Initiate connection to mongo database
// Create dummy data in database
require('./config/mongoose.js');
require('./seed/seeds.js')();

require('./config/middleware.js')(app, express);
app.use('/api', apiRoutes);


app.listen(process.env.PORT || port, console.log('listening to localhost:3000'));
module.exports = app;
