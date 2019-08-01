var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//adding cors to prevent error when using api
var cors = require('cors');
var app = express();
//using cors before setting up routes
app.use(cors());


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Successful connect of classic Mongo DB
// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require("mongodb").ObjectID;

// const uri = "mongodb+srv://peerlift:atheno75@pl-connect-0azku.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   //does not show if db is correct yet
//   const collection = client.db("sample_airbnb").collection("listingAndReviews");
//   if(err) {
//     console.log('The database is off chief');
// }
// console.log('The database works chief');

//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://peerlift:atheno75@pl-connect-0azku.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


// //This creates a connection to a local db
//const mysql = require('mysql');

//connect to users from tutorial
// app.get('/user/', (req, res) => {
//   console.log("Fetching user data ")

//   //auth info to connect to a local db
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'PASSWORD',
//     database: 'pl_connect'
//   })

  // //auth info to connect to aws rds, not yet working
  // const connection = mysql.createConnection({
  //   host: 'peerlift.cwp44tiqr9lo.us-east-2.rds.amazonaws.com',
  //   port: '3306',
  //   user: 'peerl_root',
  //   password: 'peerliftDB2017!',
  //   database: 'peerlift_db2'

  // })

  //with new db
  // const connection = mysql.createConnection({
  //   host: 'aacjik3kzvv0hg.cwp44tiqr9lo.us-east-2.rds.amazonaws.com',
  //   port: '3306',
  //   user: 'plconnect',
  //   password: 'atheno75!',
  //   database: 'ebdb'
  // });


//set up to connect to amazon rds db 
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT,
  
//   //socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

// });



//   connection.connect(function(err){

//     if(!err) {
//         console.log("Database is connected ... ");    
//     } else {
//         console.log("Error connecting database ... " + err);    
//     }
//     });
  

//   //const userId = req.params.id


//   //code to query local db
//   const queryString = "SELECT * FROM scholarships"
//   connection.query(queryString, (err, rows, fields) => {
//     if (err) {
//       console.log("Failed to query for users: " + err)
//       res.sendStatus(500)
//       return
//       // throw err
//     }

//     console.log("I think we fetched users successfully")

//     const users = rows.map((row) => {
//       return {title: row.title, deadline: row.deadline}
//     })

//     res.json(users)
//   })

//    //res.end()
// })


// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "runfast433",
//   database: "nodemysql"


// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });







//create a mySQL pool 
//const pool = mysql.createPool(con);
//Export this pool so app can use
//module.exports = pool;


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
