var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var post = server.address().port;

  console.log('DataView server listening at http://%s:%s', host, port);
});