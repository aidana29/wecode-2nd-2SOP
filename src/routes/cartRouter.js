const express = require("express");
const { cartController } = require("../services/cartController");
const router = express.Router();

router.post("/",cartController.cartItem);

module.exports = { cartRouter };

