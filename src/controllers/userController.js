const { userService } = require("../services");

// refactoring 때 try/catch 수정
const signUp = async (req, res) => {
  try {
    const { lastName, firstName, email, password } = req.body;
    await userService.signUp(lastName, firstName, email, password);
    res.status(201).json({
      message: "USER_CREATED",
    });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token } = await userService.signIn(email, password);
    res.status(200).json({
      message: "LOGIN_SUCCESS",
    feature/cart_dao
      token: token,
    });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
