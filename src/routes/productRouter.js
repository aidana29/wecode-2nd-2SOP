const express = require("express");

const {productController} = require("../controllers");
const productRouter = express.Router();

productRouter.get("/", productController.showMain);
//URI:https://www.2sop.com/c/{category}/{second-category}/{product-name}
//router.get("/c/:category/:second-category/:product-name", errorHandling(productController.signUp));≈


module.exports = { productRouter };
//productRouter를 exports하는거랑 {productRouter} export하는 것의 차이
//export가 productRouter에도있고 index에도있는데 차이가뭐에요
//정답: index의 router는 