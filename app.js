var createError = require('http-errors');
var express = require('express');
//rec firebase and real time
var firebase = require('firebase');
var realTime = require("firebase/database");

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//adding cors to prevent error when using api
var cors = require('cors');
var app = express();
//using cors before setting up routes
app.use(cors());

//Set up my routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Forward traffic to usersRouter
app.use('/', indexRouter);
app.use('/users', usersRouter);

//init firebase
var firebaseConfig = {
  apiKey: "AIzaSyAhZL_8_AUsyUCuCo4YO5_cewHHtCVbWo4",
  authDomain: "pl-connect-c80d6.firebaseapp.com",
  databaseURL: "https://pl-connect-c80d6.firebaseio.com",
  projectId: "pl-connect-c80d6",
  storageBucket: "",
  messagingSenderId: "410121798989",
  appId: "1:410121798989:web:94dfadb890cc6005"
};
firebase.initializeApp(firebaseConfig);



//ccoment out cry


 
// //This creates a connection to a local db
//const mysql = require('mysql');

//connect to users from tutorial
// app.get('/user/', (req, res) => {
//   console.log("Fetching user data ")


//   connection.connect(function(err){

//     if(!err) {
//         console.log("Database is connected ... ");    
//     } else {
//         console.log("Error connecting database ... " + err);    
//     }
//     });
  

//   //const userId = req.params.id



//     console.log("I think we fetched users successfully")

//     const users = rows.map((row) => {
//       return {title: row.title, deadline: row.deadline}
//     })

//     res.json(users)
//   })

//    //res.end()
// })




// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


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
