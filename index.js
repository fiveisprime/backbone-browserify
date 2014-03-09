var express = require('express');
var path    = require('path');
var http    = require('http');
var app     = express();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('server/views/index.html');
});

http.createServer(app).listen(process.env.PORT || 3000);
