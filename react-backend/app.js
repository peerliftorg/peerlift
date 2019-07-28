var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// //This creates a connection to a local db
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  //host: '127.0.0.1',
  user: "root",
  password: "runfast433",
  //database: "test",
  //port: '8889'

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//This code did not work, so scrapping
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = `CREATE DATABASE nodemysql`;
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("The Database is created!!");
//   });
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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



//set up to connect to amazon rds db 
//going to comment out for now in order to install normal mySQL
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();