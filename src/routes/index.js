const express = require("express");

const { userRouter } = require("./userRouter");
const { productRouter } = require("./productRouter");
const { cartRouter } = require("./cartRouter");
const { paymentRouter } = require("./paymentRouter");
const { orderRouter } = require("./orderRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/payment", paymentRouter);
router.use("/order", orderRouter)

module.exports = { router };
