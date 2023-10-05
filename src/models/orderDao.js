const { myDataSource } = require("./dataSource");

const orderToDb = async (userId, cartId) => {
  await myDataSource.query(
    `INSERT INTO orders (user_id, cart_id) VALUES (?, ?)`,
    [userId, cartId]
  );
};

const existingCartId = async (cartId) => { 
  const cart = await myDataSource.query(
     `SELECT cart_id FROM orders WHERE cart_id = ?`,
     [cartId]);
   return cart
 }

 const orderId = async (cartId) => { 
  const order = await myDataSource.query(
     `SELECT id FROM orders WHERE cart_id = ?`,
     [cartId]);
   return order
 }

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
    `INSERT INTO shipments (shipment_date, address, city, state, country, zip_code, user_id, order_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [shipmentDate, address, city, state, country, zipCode, userId, orderId]
  );
};

const showOrderItems = async (cartId) => {
  const orderItems = await myDataSource.query(`SELECT product_id, cart_id, price, quantity FROM cart_items WHERE cart_id = ?`, [cartId]);
  console.log("3", orderItems)
  return orderItems
};

module.exports = {
  orderToDb,
  shipmentToDb,
  showOrderItems,
  orderId,
  existingCartId,
};