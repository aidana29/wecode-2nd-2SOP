const { myDataSource } = require("./dataSource");

const orderToDb = async (userId, cartId) => {
  await myDataSource.query(
    `INSERT INTO order (user_id, product_id) VALUES ?, ?`,
    [userId, cartId]
  );
};

const shipmentToDb = async (
  shipmentDate,
  address,
  city,
  state,
  country,
  zipCode,
  userId,
  orderId
) => {
  await myDataSource.query(
    `INSERT INTO shipment (shipment_date, address, city, state, country, zip_code, user_id, order_id) VALUES ?, ?, ?, ?, ?, ?, ?, ?`,
    [shipmentDate, address, city, state, country, zipCode, userId, orderId]
  );
};

const showOrderItems = async (cartId) => {
  const orderItems = await myDataSource.query(`SELECT product_id, cart_id, price, quntity FROM cart_items WHERE cart_id = ?`, [cartId]);
  return orderItems
};

module.exports = {
  orderToDb,
  shipmentToDb,
  showOrderItems,
};
