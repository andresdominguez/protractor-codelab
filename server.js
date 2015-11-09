var bodyParser = require('body-parser');
var express = require('express');
var fakeUsers = require('./server/fake-users');

var app = express();

// Serve all the angular files under testapp
app.use(
    express.static(__dirname + '/testapp'),
    express.static(__dirname));
app.use(bodyParser.json());

var start = function() {

  var persistentUsers = fakeUsers.getUsers();

  app.get('/users', function(req, res) {
    res.send({list: fakeUsers.getUsers()});
  });

  app.get('/persistent/list', function(req, res) {
    res.send({list: persistentUsers});
  });

  app.get('/persistent/list', function(req, res) {
    res.send({list: persistentUsers});
  });

  app.post('/persistent/add', function(req, res) {
    if (!req.body || !req.body.user) {
      res.sendStatus(400);
    }
    persistentUsers.push(req.body.user);
    res.sendStatus(200);
  });

  var server = app.listen(9000, function() {
    console.log('App listening at http://localhost:%s',
        server.address().port);
  });
};

start();
