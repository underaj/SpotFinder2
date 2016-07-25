var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_z9z077p8:7jlnamob521h1e5eqi3l0dnsg6@ds029715.mlab.com:29715/heroku_z9z077p8' || 'mongodb://localhost/skatespot');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('db connected');
});
