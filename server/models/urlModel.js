const mongoose = require("mongoose");

const URLModelSchema = new mongoose.Schema({
  uid: String,
  original_url: String,
  short_url: String,
});

const URLModel = mongoose.model("URLModel", URLModelSchema);
module.exports = URLModel;
