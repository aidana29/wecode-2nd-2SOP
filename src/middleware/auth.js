const jwt = require("jsonwebtoken");
// const { userService } = require("../services");
// const { throwError } = require("../utilities/throwError");
//.env 파일에 SECRET 항목을 추가해줘야 합니다.
const { SECRET } = process.env;

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(req.headers);
    console.log(token);

    const { userId } = jwt.verify(token, SECRET);

    if (!token) {
      const error = new Error("ACCESS_TOKEN_REQUIRED");
      error.status = 401;
      throw error;
    }

    req.userId = userId;
    next();
  } catch (error) {
    error.status = error.status || 400;
    error.message = error.message.toUpperCase().replaceAll(" ", "_");
    next(error);
  }
};

module.exports = { validateToken };
