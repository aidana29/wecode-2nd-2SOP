const { myDataSource } = require("./dataSource");

const orderPayment = async (userId, orderId, address) => {
  myDataSource.query(`
    INSERT INTO payments (   
        user_id, 
        order_id, 
        address, 
        payment_method
        )
    VALUES (
        ${userId}, 
        ${orderId}, 
        ${address},  
        'credit'
        );
    `);
};

const foundCartId = async (userId) => {
  const cartId = myDataSource.query(`
    SELECT id FROM carts WHERE user_id = ${userId}; -- Replace '1' with the actual user_id you want to query
`);
  if (cartId.length === 0) {
    // No carts found for the user
    return null;
  }
  const firstCartId = cartID[0].id;
  return firstCartId;
};

module.exports = { orderPayment, foundCartId };
