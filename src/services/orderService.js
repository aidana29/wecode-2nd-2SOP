const { orderDao } = require("../models");

const orderCheck = async (userId, cartId, shipmentDate, address, city, state, country, zipCode) => {

  console.log(shipmentDate,address, city, state, country, zipCode )


  if (!shipmentDate || !address || !city || !state || !country || !zipCode) {
    const error = new Error("SHIPMENT_NOT_FOUND");
    error.status = 400;
    throw error;
  }

  await orderDao.orderToDb(userId, cartId);
  await orderDao.shipmentToDb(shipmentDate, address, city, state, country, zipCode, userId, orderId)
};

const orderItems = async (cartId) => {
  const orderItems = await orderDao.showOrderItems(cartId);
  return orderItems
}

module.exports = {
    orderCheck,
    orderItems
};