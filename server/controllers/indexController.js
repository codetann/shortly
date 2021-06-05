const URLModel = require("../models/urlModel");

const controller = {
  initialize: (req, res) => {
    // code goes here

    res.sendFile("index.html");
  },
  fetch: async (req, res) => {
    try {
      const result = await URLModel.find({
        short_url: req.params.short_url,
      }).lean();

      const url = result[0].original_url;

      res.send(`<script>window.location.href = '${url}';</script>`);
    } catch (error) {
      res.send(`<script>window.location.href = 'https://stly.us';</script>`);
    }
  },
};

module.exports = controller;
