var express = require('express');
var path    = require('path');
var http    = require('http');
var app     = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', function (req, res) {
  res.sendfile('server/views/index.html');
});

http.createServer(app).listen(app.get('port'));
