const express = require("express");
const { cartController } = require("../controllers");
const { validateToken } = require("../middleware/auth");

const cartRouter = express.Router();

cartRouter.use(validateToken);

cartRouter.post("/", cartController.cartItem);
cartRouter.get("/", cartController.cartGet);
cartRouter.delete("/:cartId/:productId/:id", cartController.cartDelete);
cartRouter.post("/fix", cartController.cartFix); // 각각 order, payment 넘어갈때 실행 될것

module.exports = { cartRouter };
