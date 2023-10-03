const express = require("express"); 
const { productController } = require("../controllers");
const productRouter = express.Router();


productRouter.get("/", productController.showMain);
productRouter.get("/c/:category/:secondCategory/:productId", productController.showSpecificProduct);
productRouter.get("/c/:category", productController.showCategory);

module.exports = { productRouter };
