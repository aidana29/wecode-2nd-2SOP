const paymentDao = require("../models");
const { throwError } = require("../utilities/throwError");

const orderPayment = async (userId, orderId, address) => {
  //address 비어있음 and 적합하지 않음
  if (!address) {
    throwError(400, "ADDRESS_ERROR"); //throwError 사용 방법 예시
  }
  //cart의 주인이 user가 아닌 경우
  //userId 가지고 cartId 구할 수 있는 쿼리문
  const cartId = await paymentDao.foundCartId(userId);
  if (orderId != cartId) {
    throwError(401, "UNAUTHORIZED");
  }
  // 에러핸들링 모두 통과
  await paymentDao.orderPayment(userId, orderId, address);
};

module.exports = { orderPayment };
