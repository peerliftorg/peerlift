var express = require('express');
var router = express.Router();
const Opp = require('../opp');
const Add = require('../add');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

//from body-parser tut
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//load the data from the sql pool
//const pool = require('../app.js');

/* GET users listing. */
//find all users
router.get('/', (req, res, next) => {
  Opp.find()
    .exec()
    //.then(sort({deadline:-1}))
    .then(doc => {
      //console.log(doc);
      res.status(200).json(doc);
    })

    .catch(err =>{
      console.log(err);
      res.status(500);
    });
  
  //});
});

router.post('/', (req, res, next) => {
  const add = new Add({
    _id: new mongoose.Types.ObjectId(),
    Name: req.body.Name
  });
  //save to db
  add.save()
  .then(result=> {
    console.log(result);
  })
  .catch(err => console.log(err));

  res.status(200).json({
    message: "Handling POST requests to /users",
    createdOpp: add
  });


});

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "Updated requests to /users"
  });
});

{}


module.exports = router;

//legacy code from when connected to mysql
// con.query('SELECT * from test', function (error, results, fields) {
//   if(error){
//     res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
//     //If there is error, we send the error in the error section with 500 status
//   } else {
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     //If there is no error, all is good and response is 200OK.