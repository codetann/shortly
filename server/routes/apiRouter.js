const express = require("express");
const router = express.Router();
const controller = require("../controllers/apiController");

router.post("/create", controller.save);

module.exports = router;
