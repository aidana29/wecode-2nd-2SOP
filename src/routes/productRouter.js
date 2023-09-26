const express = require("express");

const {productController} = require("../controllers");
const productRouter = express.Router();

productRouter.get("/", productController.showMain);
//URI:https://www.2sop.com/c/{category}/{second-category}/{product-name}
//router.get("/c/:category/:second-category/:product-name", errorHandling(productController.signUp));≈


module.exports = { productRouter };
