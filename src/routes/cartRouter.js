const express = require("express");

const { cartController } = require("../controllers");
const { cartIn } = require("../services/cartService");

const cartRouter = express.Router();

cartRouter.get("/", cartController.cartGet);
cartRouter.post("/", cartController.cartIn);
module.exports = { cartRouter };
