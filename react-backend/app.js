var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//adding cors to prevent error when using api
var cors = require('cors');
//for body parser
var bodyParser = require('body-parser');

var app = express();
//using cors before setting up routes
app.use(cors());

//from body-parser tut
// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Set up my routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Forward traffic to usersRouter
app.use('/', indexRouter);
app.use('/users', usersRouter);


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://peerlift:atheno75@pl-connect-0azku.mongodb.net/peerlift?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;