const express = require("express");
const controller = require("../controllers/indexController");
const router = express.Router();

router.get("/", controller.initialize);
router.get("/:short_url", controller.fetch);

module.exports = router;
