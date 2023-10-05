const express = require("express"); 
const { productController } = require("../controllers");
const productRouter = express.Router();


productRouter.get("/", productController.showMain);
productRouter.get("/:category/:secondCateogry/:productId", productController.showSpecificProduct);
productRouter.get("/:category", productController.showCategory);

module.exports = { productRouter };
