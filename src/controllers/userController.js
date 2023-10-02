const { userService } = require("../services");

// refactoring 때 try/catch 수정
const signUp = async (req, res) => {
  try {
    const { lastName, firstName, email, password } = req.body;
    if (!lastName || !firstName || !email || !password) {
      const error = new Error("KEY_ERROR");
      error.status = 400;
      throw error;
    }
    await userService.signUp(lastName, firstName, email, password);
  } catch {
    res.status(201).json({ message: "USER_CREATED" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("KEY_ERROR");
      error.status = 400;
      throw error;
    }
    const token = await userService.signIn(email, password);
  } catch {
    res.status(200).json({
      message: "LOGIN_SUCCESS",
      token,
    });
  }
};

module.exports = {
  signUp,
  signIn,
};
