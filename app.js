
var methodOverride = require('method-override')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = 8000 || process.env.PORT

var Handlebars= require('hbs')

var index = require('./router/index');
var movies = require('./router/movies');
var put = require('./router/put');


var app = express();


console.log(path.join(__dirname,'views/partials'));
Handlebars.registerPartials(path.join(__dirname,'views/partials'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(methodOverride('_method'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/movies', movies);
app.use('/edit', put)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port,(req,res,next) => {
  console.log(`running on port ${port}`);
})

module.exports = app;
