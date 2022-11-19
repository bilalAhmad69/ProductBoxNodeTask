const express = require(`express`);
const promisesController = require("../Controller/promisesController");
const router = express.Router();
router.get("/", promisesController);

module.exports = router;
