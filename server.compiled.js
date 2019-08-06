"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cors = require('cors');

var PORT = process.env.HTTP_PORT || 4001;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.use(cors()); //Set up my routes

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users'); //Forward traffic to usersRouter


app.use('/', indexRouter);
app.use('/users', usersRouter);

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://peerlift:atheno75@pl-connect-0azku.mongodb.net/peerlift?retryWrites=true&w=majority').then(function () {
  console.log('Successfully connected to MongoDB Atlas!');
})["catch"](function (error) {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
