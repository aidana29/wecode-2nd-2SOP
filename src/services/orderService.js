const { orderDao } = require("../models");

const orderCheck = async (
  userId,
  cartId,
  address,
  detailedAddress,
  country,
  firstName,
  lastName,
  phoneNumber
) => {
  if (
    !address ||
    !detailedAddress ||
    !country ||
    !firstName ||
    !lastName ||
    !phoneNumber
  ) {
    const error = new Error("SHIPMENT_NOT_FOUND");
    error.status = 400;
    throw error;
  }

  const [existingCart] = await orderDao.existingCartId(cartId);
  if (existingCart) {
    const error = new Error("CART_ERROR");
    error.status = 400;
    throw error;
  }

  await orderDao.orderToDb(userId, cartId);

  const [orderId] = await orderDao.orderId(cartId);
  const order = orderId.id;
  console.log(order);

  await orderDao.shipmentToDb(
    userId,
    address,
    detailedAddress,
    country,
    firstName,
    lastName,
    phoneNumber,
    order
  );
};

const orderItems = async (cartId) => {
  const orderItems = await orderDao.showOrderItems(cartId);
  console.log("2", orderItems);
  return orderItems;
};

module.exports = {
  orderCheck,
  orderItems,
};
