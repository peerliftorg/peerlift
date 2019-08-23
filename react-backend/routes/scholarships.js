//This file contains the API calls to connect to the mongodb scholarships collection.
//Contains a GET request to get all scholarships, GET request to get scholarships by ID
// Additionally file contains a POST request for users to add their own scholarships.


var express = require('express');
var router = express.Router();
const Scholarships = require('../scholarshipSchema');
const Add = require('../addSchema');
const Summer = require('../summerSchema');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
//from body-parser tut
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
//find all scholarships from .scholarships
router.get('/', (req, res, next) => {
  Scholarships.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })

    .catch(err =>{
      console.log(err);
      res.status(500);
    });
});


//Get content from a specific ID of scholarships
router.get('/:oppId', (req,res,next) => {
  const id = req.params.oppId;
  
  Scholarships.findById(id)
    .exec()
    .then(doc => {
      res.status(200).json(doc);

    })
    .catch(err => {
      console.log(err)
      res.status(500);
    });

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

