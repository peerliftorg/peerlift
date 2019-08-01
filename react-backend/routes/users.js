var express = require('express');
var router = express.Router();
const Opp = require('../opp');
const mongoose = require('mongoose');

//load the data from the sql pool
//const pool = require('../app.js');

/* GET users listing. */
//find all users
router.get('/', (req, res, next) => {
  db.collection('scholarships').find()
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })

    .catch(err =>{
      console.log(err);
      res.status(500);
    });
  
  //});
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /users"
  });
  const opp = new Opp({
    _id: new mongoose.Types.ObjectId()
    //insert other fields later
  });
  //save to db
  product.save();
});

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "Updated requests to /users"
  });
});

//add one for specific IDs later

module.exports = router;

//legacy code from when connected to mysql
// con.query('SELECT * from test', function (error, results, fields) {
//   if(error){
//     res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
//     //If there is error, we send the error in the error section with 500 status
//   } else {
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     //If there is no error, all is good and response is 200OK.