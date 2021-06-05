const mongoose = require("mongoose");
const URLModel = require("../models/urlModel");
const uuid = require("uuid").v4;

const domain = "http://localhost:3000";

const controller = {
  save: async (req, res) => {
    const random = uuid().split("").splice(0, 6).join("");
    const short_url = `${domain}/${random}`;

    try {
      await URLModel.create({
        uid: uuid(),
        original_url: req.body.url,
        short_url: random,
      });
    } catch (error) {
      console.error(error);
    }
    res.status(200).send({ url: short_url });
  },
};

module.exports = controller;
