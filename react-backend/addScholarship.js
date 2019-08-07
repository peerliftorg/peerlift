const mongoose = require('mongoose');

const oppSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String
},
{collection: 'added'}
);

module.exports = mongoose.model('Add',oppSchema);