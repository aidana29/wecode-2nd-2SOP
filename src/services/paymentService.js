const userDao = require("../models");

const orderPayment = async (req) => {
  // 에러핸들링 모두 통과
  await userDao.orderPayment(req);
};

module.exports = { orderPayment };
