const { orderService } = require("../services");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth")

// front가 보내주는 정보: token, cart_id(카트), shipment
// auth를 통해 token verify (return하는 게 - userId, validateToken을 통해서 userService에서 확인)
// order를 orderDao에 정보 저장, shipment를 paymentDao(안 함), orderDao 저장
// response로 오케이(영수증 내역처럼 정보 = 제품, 수량, 제품금액(price)) 전송

const order = async (req, res) => {
  try {
    const { cartId, shipmentDate, address, city, state, country, zipCode } =
      req.body;

    const userId = req.userId

    await orderService.orderCheck(
      userId,
      cartId,
      shipmentDate,
      address,
      city,
      state,
      country,
      zipCode
    );

    const orderItems = await orderService.orderItems(cartId)
    console.log("1", orderItems)
    res.status(201).json({
        message: "ORDER_CREATED",
        orderItems
      });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  order,
};
