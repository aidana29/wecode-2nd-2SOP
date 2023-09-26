const express = require("express");


const { userRouter } = require("./userRouter");
const productRouter = require("./productRouter");
const { productRouter } = require("./productRouter");
const { cartRouter } = require("./cartRouter");
const { paymentRouter } = require("./paymentRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/payment", paymentRouter);

module.exports = { router };
