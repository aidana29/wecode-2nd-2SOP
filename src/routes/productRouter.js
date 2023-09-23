const express = require("express"); //mandatory? 네 필수 적이라고 할 수 있습니다.

const { productController } = require("../controllers");
const { errorHandling } = require("../utilities/errorHandling");
const productRouter = express.Router();

// productRouter.post("/", errorHandling(productController.signIn));
//productRouter.post("/signUp", errorHandling(productController.signUp));

module.exports = { productRouter };
