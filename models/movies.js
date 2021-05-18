const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String, required: true },
  source: { type: String, required: true }
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;