const express = require("express");
const { userController } = require("../controllers/userController");
const { errorHandling } = require("../utilities/errorHandling");
const router = express.Router();

router.post("/", errorHandling(userController.signIn));
router.post("/signUp", errorHandling(userController.signUp));

module.exports = router;