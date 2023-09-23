const express = require("express");

const { paymentController } = require("../controllers");

const paymentRouter = express.Router();

module.exports = { paymentRouter };
