const express = require("express");
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
// const { errorHandling } = require("../utilities/errorHandling");
const router = express.Router();

router.post("/", userController.signIn);
router.post("/signUp", userController.signUp);
router.get("/", productController.showMain);
module.exports = { router };
