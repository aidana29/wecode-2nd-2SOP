const { paymentService } = require("../services");

const orderPayment = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderId, address, totalPrice } = req.body;
    console.log("ok");
    const response = await paymentService.orderPayment(
      userId,
      orderId,
      address,
      totalPrice
    );
    res.status(200).json({
      message: "ORDER_SUCCESS",
      paymentId: response.paymentId,
      remainingPoints: response.credits,
    });
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = { orderPayment };
