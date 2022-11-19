const express = require(`express`);
const thenController = require("../Controller/thenController.js");
const router = express.Router();
router.get("/", thenController);

module.exports = router;
