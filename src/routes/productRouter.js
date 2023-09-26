const express = require("express"); //mandatory?

//??const { productController } = require("../controllers/productController");
const { errorHandling } = require("../utilities/errorHandling");
const router = express.Router();
//23.9.22 반드시 controller랑 errorHandler를따로뺴는지 ?? 그냥 controller에서
//에러처리한번에못하나용
router.post("/", errorHandling(productController.signIn));
router.post("/signUp", errorHandling(productController.signUp));

module.exports = router;
