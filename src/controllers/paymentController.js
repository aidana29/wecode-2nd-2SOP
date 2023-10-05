const { paymentService } = require("../services");

const orderPayment = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderId, address, totalPrice } = req.body;
    await paymentService.orderPayment(userId, orderId, address, totalPrice);
    res.status(200).json({ message: "ORDER_SUCCESS" });
  } catch (error) {
    // res.status(error.status).json({ message: error.message });
    res.status(400).json({ message: "ererererere!!" });
  }
};
module.exports = { orderPayment };
