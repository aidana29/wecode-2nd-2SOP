const express = require("express");
const { cartController } = require("../controllers");

const cartRouter = express.Router();

cartRouter.post("/", cartController.cartItem);
cartRouter.get("/", cartController.cartGet);
cartRouter.delete("/", cartController.cartDelete);
cartRouter.post("/fix", cartController.cartFix);

module.exports = { cartRouter };
