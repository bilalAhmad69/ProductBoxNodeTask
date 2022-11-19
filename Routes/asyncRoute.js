const express = require(`express`);
const asyncController = require("../Controller/asyncController.js");
const router = express.Router();
router.get("/", asyncController);

module.exports = router;
