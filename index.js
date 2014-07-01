var express = require('express')
  , path    = require('path')
  , http    = require('http')
  , app     = express();

var env = process.env.NODE_ENV || 'development';

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(require('serve-favicon')(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(require('morgan')('dev'));
app.use(require('body-parser').json());

app.use(express.static(path.join(__dirname, 'public')));

if ('development' === env) {
  app.use(require('errorhandler')());
}

app.get('/', function (req, res) {
  res.sendfile('server/views/index.html');
});

app.use(require('./server/models')());

http.createServer(app).listen(app.get('port'));
