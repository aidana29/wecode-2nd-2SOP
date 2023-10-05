const paymentService = require("../services");
const orderPayment = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderId, address, totalPrice } = req.body;
    paymentService.orderPayment(userId, orderId, address, totalPrice);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = { orderPayment };
