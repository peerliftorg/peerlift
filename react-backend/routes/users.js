var express = require('express');
var router = express.Router();

//load the data from the sql pool
//const pool = require('../app.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  con.query('SELECT * from test', function (error, results, fields) {
    if(error){
      res.send(JSON.stringify({"status": 500, "error": error, "response": null})); 
      //If there is error, we send the error in the error section with 500 status
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      //If there is no error, all is good and response is 200OK.
    }
	// Comment out this line:
  //res.send('respond with a resource');

  //Attempt to integrate with mysql pool
  // pool.query('SELECT * FROM test', (error, result) => {
  //   if (error) throw error;

  //   response.send(result);
  
  
  // And insert something like this instead:
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);
});
//added extra here
});

module.exports = router;