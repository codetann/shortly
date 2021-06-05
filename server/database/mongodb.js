const mongoose = require("mongoose");
const URLModel = require("../models/urlModel");

const mongodb = {
  connect() {
    mongoose.connect(
      process.env.DB_CONNECTION_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("Connected")
    );
  },
  save(data) {
    URLModel.create({ ...data }, (err, instance) => {
      if (err) return err;

      console.log("saved");
    });
  },
};

module.exports = mongodb;
