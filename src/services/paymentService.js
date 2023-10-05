const { paymentDao } = require("../models");
const { throwError } = require("../utilities/throwError");

const orderPayment = async (userId, orderId, address, totalPrice) => {
  //address 비어있음 and 적합하지 않음
  if (!address) {
    throwError(400, "ADDRESS_ERROR"); //throwError 사용 방법 예시
  }
  // 에러핸들링 모두 통과
  await paymentDao.orderPayment(userId, orderId, address, totalPrice);
};

module.exports = { orderPayment };
