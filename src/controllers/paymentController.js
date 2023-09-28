const paymentService = require("../services");
const orderPayment = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderId, address } = req.body;
    paymentService.orderPayment(userId, orderId, address);
  } catch (error) {}
};
module.exports = { orderPayment };
