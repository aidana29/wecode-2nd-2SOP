const express = require("express");
const userController = require("../controllers/userController");
// const { errorHandling } = require("../utilities/errorHandling");
const router = express.Router();

// router.post("/", userController.signIn);
router.post("/signUp", userController.signUp);

module.exports = { router };