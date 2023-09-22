const express = require("express"); //mandatory?
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.showMain);
//URI:https://www.2sop.com/c/{category}/{second-category}/{product-name}
//router.get("/c/:category/:second-category/:product-name", errorHandling(productController.signUp));≈

module.exports = { router };
//export가 productRouter에도있고 index에도있는데 차이가뭐에요
