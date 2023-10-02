const express = require("express");
const { cartController } = require("../services/cartController");
const router = express.Router();

router.post("/",cartController.cartItem);
cartRouter.get("/", cartController.cartGet);

module.exports = { cartRouter };
