const mongoose = require('mongoose');

const summerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Description: String,
    Link: String,
    Amount: String,
    DescriptionDate: String,
    MetricDate: String,
    Grade: String,
    FilterDate: String,
    Tags: String

},
{collection: 'summer_programs'}
);

module.exports = mongoose.model('Summer',summerSchema);