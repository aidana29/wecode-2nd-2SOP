const express = require("express");

const { paymentController } = require("../controllers");
const { validateToken } = require("../middleware/auth");

const paymentRouter = express.Router();

paymentRouter.use(validateToken);

paymentRouter.post("/", paymentController.orderPayment);

module.exports = { paymentRouter };
