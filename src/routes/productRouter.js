const express = require("express"); //mandatory?
const router = express.Router();
const productController = require("../controllers/productController");
//23.9.22 반드시 controller랑 errorHandler를따로뺴는지 ?? 그냥 controller에서
//에러처리한번에못하나용

router.get("/", productController.showMain);
//URI:https://www.2sop.com/c/{category}/{second-category}/{product-name}
//router.get("/c/:category/:second-category/:product-name", errorHandling(productController.signUp));≈

module.exports = { router };
//export가 productRouter에도있고 index에도있는데 차이가뭐에요
