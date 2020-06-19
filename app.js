//Main file to create Express server, configure routes, forward traffic, connect mongodb,and catch errors.

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
var usersRouter = require('./routes/scholarships');
var summerRouter = require('./routes/summerprograms');
var emailRouter = require('./routes/email');


//Forward traffic to appropriate routers
app.use('/api/scholarships', usersRouter);
app.use('/api/summerprograms', summerRouter);
app.use('/api/email', emailRouter);


    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
              res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
              console.log('loaded prod react');
          });


//For production, serve react files statically
// if(process.env.NODE_ENV === 'production'){
//     //set static folder
//     app.use(express.static('client/build'));
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
//         console.log('loaded prod react');
//     });

// }


//This code connects our mongodb database to the express server
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