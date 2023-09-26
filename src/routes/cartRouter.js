const express = require("express");

const { cartController } = require("../controllers");

const cartRouter = express.Router();

module.exports = { cartRouter };
