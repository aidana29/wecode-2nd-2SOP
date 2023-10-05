const { orderDao } = require("../models");

const orderCheck = async (userId, cartId, shipmentDate, address, city, state, country, zipCode) => {

  if (!shipmentDate || !address || !city || !state || !country || !zipCode) {
    const error = new Error("SHIPMENT_NOT_FOUND");
    error.status = 400;
    throw error;
  }

  const [existingCart] = await orderDao.existingCartId(cartId)
  if (existingCart) {
    const error = new Error("CART_ERROR");
    error.status = 400;
    throw error;
  }

  await orderDao.orderToDb(userId, cartId);

  const [orderId] = await orderDao.orderId(cartId);
  const order = orderId.id
  console.log(order)
  
  await orderDao.shipmentToDb(shipmentDate, address, city, state, country, zipCode, userId, order)
};

const orderItems = async (cartId) => {
  const orderItems = await orderDao.showOrderItems(cartId);
  console.log("2", orderItems)
  return orderItems
}

module.exports = {
    orderCheck,
    orderItems
};