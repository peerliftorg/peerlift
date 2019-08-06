import path from 'path';
import express from 'express';

var cors = require('cors');

const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(cors());

//Set up my routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Forward traffic to usersRouter
app.use('/', indexRouter);
app.use('/users', usersRouter);

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://peerlift:atheno75@pl-connect-0azku.mongodb.net/peerlift?retryWrites=true&w=majority')
.then(() => {
  console.log('Successfully connected to MongoDB Atlas!');
})
.catch((error) => {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});