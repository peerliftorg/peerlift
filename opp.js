const mongoose = require('mongoose');

const oppSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Description: String,
    Link: String,
    DescriptionAmount: String,
    MetricAmount: Number,
    DescriptionDate: String,
    MetricDate: String,
    Grade: String,
    FilterDate: String

},
{collection: 'scholarships'}
);

module.exports = mongoose.model('Opp',oppSchema);