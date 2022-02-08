//Defines a Mongoose schema to model summer programs data that is displayed to users in /summerprograms.

const mongoose = require("mongoose");

const summerSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Description: String,
    Link: String,
    Amount: String,
    DescriptionDate: String,
    MetricDate: String,
    // Grade: String,
    Grade: Array,
    FilterDate: String,
    Tags: String,
  },
  { collection: "summer_programs" }
);

module.exports = mongoose.model("Summer", summerSchema);
