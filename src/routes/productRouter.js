const express = require("express"); 

const { productController } = require("../controllers");
const { errorHandling } = require("../utilities/errorHandling");
const productRouter = express.Router();

// productRouter.post("/", errorHandling(productController.signIn));
productRouter.get("/", productController.showMain);

module.exports = { productRouter };
