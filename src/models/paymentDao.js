const { myDataSource } = require("./dataSource");

const orderPayment = async (userId, orderId, address, totalPrice) => {
  console.log("before query");
  await myDataSource.query(
    `
  INSERT INTO payments (user_id, order_id, address)
  VALUES (?, ?, ?)`,
    [userId, orderId, address]
  );
  console.log("insert finish");
  await myDataSource.query(`
    UPDATE users
    SET credits = credits - ${totalPrice}
    WHERE id = ${userId};
  `);
};

const foundCartId = async (userId) => {
  const cartId = myDataSource.query(`
    SELECT id FROM carts WHERE user_id = ${userId};
`);
  if (cartId.length === 0) {
    // No carts found for the user
    return null;
  }
  const firstCartId = cartID[0].id;
  return firstCartId;
};

module.exports = { orderPayment, foundCartId };
