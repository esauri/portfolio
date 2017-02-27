var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var hbsHelpers = require('handlebars-helpers');

// Routes
var routes = require('./routes/index');
var about = require('./routes/about');
var audiovisualizer = require('./routes/projects/audiovisualizer');
var clickergame = require('./routes/projects/clickergame');
var trumpcard = require('./routes/projects/trumpcard');
var twosevenzero = require('./routes/projects/twosevenzero');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: __dirname + '/public/sass',
  dest: __dirname + '/public/css',
  outputStyle: 'compressed',
  prefix: '/css'
}));

app.use(express.static(path.join(__dirname, 'public')));

// Using routes
app.use('/', routes);
app.use('/270', twosevenzero);
app.use('/about', about);
app.use('/audiovisualizer', audiovisualizer);
app.use('/clickergame', clickergame);
app.use('/trumpcard', trumpcard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {

  var model = require('./model/global')(req, res);

  model.title += ' - Error Page';
  model.viewId = 'error';
  model.error = err;
  model.message = err.message;

  res.status(err.status || 500);
  res.render('error', model);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {

  var model = require('./model/global')(req, res);

  model.title += ' - Error Page';
  model.viewId = 'error';
  model.error = {};
  model.message = err.message;

  res.status(err.status || 500);
  res.render('error', model);
});


module.exports = app;
