var express = require('express');
var app = express();

app.use('/app', express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen('3000', function() {
  console.log('listening on http://localhost:3000/');
});
