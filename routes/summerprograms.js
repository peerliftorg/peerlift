//This file contains the API calls to connect to the mongodb summer_programs collection.
//Contains a GET request to get all summer programs, GET request to get programs by ID


var express = require('express');
var router = express.Router();
const Summer = require('../summerSchema');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
//find all scholarships from .scholarships
router.get('/', (req, res, next) => {
  Summer.find()
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


//Get content from a specific ID of scholarships
router.get('/:oppId', (req,res,next) => {
  const id = req.params.oppId;
  
  Summer.findById(id)
    .exec()
    .then(doc => {
      res.status(200).json(doc);

    })
    .catch(err => {
      console.log(err)
      res.status(500);
    });

});


router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "Updated requests to /users"
  });
});

{}


module.exports = router;

