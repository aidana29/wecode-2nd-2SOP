const express = require("express"); //mandatory?

const { productController } = require("../controllers/productController");
const { errorHandling } = require("../utilities/errorHandling");
const router = express.Router();

router.post("/", errorHandling(productController.signIn));
//router.post("/signUp", errorHandling(productController.signUp));

module.exports = router;
