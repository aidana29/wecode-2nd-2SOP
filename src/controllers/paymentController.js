const paymentService = require("../services");
const orderPayment = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderId, address } = req.body;
    paymentService.orderPayment(userId, orderId, address);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = { orderPayment };
