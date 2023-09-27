const paymentService = require("../services");
const orderPayment = async (req, res) => {
  try {
    paymentService.orderPayment(req);
  } catch (error) {}
};
module.exports = { orderPayment };
