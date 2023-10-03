const express = require("express"); 
const { productController } = require("../controllers");
const productRouter = express.Router();


productRouter.get("/", productController.showMain);
productRouter.get("/c/:category/:secondCategory/:productId", productController.showSpecificProduct);

module.exports = { productRouter };
