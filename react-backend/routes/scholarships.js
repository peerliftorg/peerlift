var express = require('express');
var router = express.Router();
const Opp = require('../opp');
const Add = require('../add');
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


//Get content from a specific ID of scholarships
router.get('/:oppId', (req,res,next) => {
  const id = req.params.oppId;
  
  Opp.findById(id)
    .exec()
    .then(doc => {
      res.status(200).json(doc);

    })
    .catch(err => {
      console.log(err)
      res.status(500);
    });

});

//Get request for all summer programs

//Get request for summer programs by ID


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

