const userService = require("../services");

const signUp = async (req, res) => {
  const { lastName, firstName, email, password, phoneNumber } = req.body;

  if (!lastName || !firstName || !email || !password || !phoneNumber) {
    const error = new Error("KEY_ERROR");
    error.status = 400;
    throw error;
  }

  await userService.signUp(lastName, firstName, email, password, phoneNumber);

  res.status(201).json({ message: "USER_CREATED" });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error("KEY_ERROR");
    error.status = 400;
    throw error;
  }

  const token = await userService.signIn(email, password);

  res.status(200).json({
    message: "LOGIN_SUCCESS",
    token,
  });
};

module.exports = {
  signUp,
  signIn,
};
