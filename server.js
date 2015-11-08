var express = require('express');
var app = express();

var TIMEOUT = 1000;

var start = function() {
  // Serve all the angular files under testapp
  app.use(
      express.static(__dirname + '/testapp'),
      express.static(__dirname));

  var server = app.listen(9000, function() {
    console.log('App listening at http://localhost:%s',
        server.address().port);
  });
};

start();
