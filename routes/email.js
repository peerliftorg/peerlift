
var express = require('express');
var router = express.Router();
const Email = require('../emailSchema');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
//from body-parser tut
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/', (req, res, next) => {
    const email = new Email({
      _id: new mongoose.Types.ObjectId(),
      Email: req.body.Email
    });
    //save to db
    email.save()
    .then(result=> {
      console.log(result);
    })
    .catch(err => console.log(err));
  
    res.status(200).json({
      message: "Handling POST requests to /email",
      createdOpp: email
    });
  
  
  });

  module.exports = router;
