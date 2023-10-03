const jwt = require("jsonwebtoken");
const { userService } = require("../services");
const { throwError } = require("../utilities/throwError");
//.env 파일에 SECRET 항목을 추가해줘야 합니다.
const { SECRET } = process.env;

const validateToken = async (req, res, next) => {
  try {
    if (!token) {
      throwError(401, "UNAUTHORIZED");
    }
    let userId;
    try {
      const decoded = jwt.verify(token, SECRET); // 암호화된 토큰을 복호화 합니다.
      userId = decoded.id;
    } catch (error) {
      // verify에서 에러가 나거나, findUser에서 에러가 나면
      throwError(400, "INVALID_TOKEN");
    }
    await userService.findUser(userId);
    req.userId = userId; // request 객체에 새로운 키값에 찾아진 유저의 정보를 할당하고
    next(); // next() 함수로 다음 미들웨어로 맥락(context)를 연결합니다.
  } catch (error) {
    next(error);
  }
};

module.exports = { validateToken };
