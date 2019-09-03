//Defines a Mongoose schema to model POST requests by users to add scholarships.

const mongoose = require('mongoose');

const addSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Email: String
},
{collection: 'emails'}
);

module.exports = mongoose.model('Email',addSchema);