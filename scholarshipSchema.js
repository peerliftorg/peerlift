//Defines a Mongoose schema to model scholarship data that is displayed to users in /scholarships.

const mongoose = require("mongoose");

const scholarshipSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Description: String,
    Link: String,
    DescriptionAmount: String,
    MetricAmount: Number,
    DescriptionDate: String,
    MetricDate: String,
    // Grade: String,
    Grade: Array,
    FilterDate: String,
    Tags: String,
  },
  { collection: "scholarships" }
);

module.exports = mongoose.model("Scholarships", scholarshipSchema);
