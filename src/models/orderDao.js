const { myDataSource } = require("./dataSource");

const orderToDb = async (userId, cartId) => {
  await myDataSource.query(
    `INSERT INTO orders (user_id, cart_id) VALUES (?, ?)`,
    [userId, cartId]
  );
  // cart정보 비활성화
  await myDataSource.query(`
  UPDATE carts
  SET status = 1
  WHERE id = ${userId};
  `);
};

const existingCartId = async (cartId) => {
  const cart = await myDataSource.query(
    `SELECT cart_id FROM orders WHERE cart_id = ?`,
    [cartId]
  );
  return cart;
};

const orderId = async (cartId) => {
  const order = await myDataSource.query(
    `SELECT id FROM orders WHERE cart_id = ?`,
    [cartId]
  );
  return order;
};

const shipmentToDb = async (
  userId,
  address,
  detailedAddress,
  country,
  firstName,
  lastName,
  phoneNumber,
  order
) => {
  await myDataSource.query(
    `INSERT INTO shipments (user_id, address, detailed_address, country, first_name, last_name, phone_number, order_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId,
      address,
      detailedAddress,
      country,
      firstName,
      lastName,
      phoneNumber,
      order,
    ]
  );
};

const showOrderItems = async (cartId) => {
  const orderItems = await myDataSource.query(
    `SELECT product_id, cart_id, price, quantity FROM cart_items WHERE cart_id = ?`,
    [cartId]
  );
  console.log("3", orderItems);
  return orderItems;
};

module.exports = {
  orderToDb,
  shipmentToDb,
  showOrderItems,
  orderId,
  existingCartId,
};
