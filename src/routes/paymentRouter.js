const express = require("express");

const { paymentController } = require("../controllers");

const paymentRouter = express.Router();

paymentRouter.post("/", paymentController.orderPayment);

module.exports = { paymentRouter };
