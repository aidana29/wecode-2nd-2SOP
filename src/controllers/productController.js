const productService = require("../services");

const showMain = async (req, res) => {
  const { lastName, firstName, email, password } = req.body;

  if (!lastName || !firstName || !email || !password) {
    const error = new Error("KEY_ERROR");
    error.status = 400;
    throw error;
  }

  await userService.signUp(lastName, firstName, email, password);

  res.status(201).json({ message: "USER_CREATED" });
};

module.exports = showMain;
