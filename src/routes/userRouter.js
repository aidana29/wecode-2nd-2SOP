const express = require("express");
const userController = require("../controllers");
// const { errorHandling } = require("../utilities/errorHandling");
const userRouter = express.Router();
userRouter.post("/", userController.signIn);
userRouter.post("/signUp", userController.signUp);

module.exports = { userRouter };
