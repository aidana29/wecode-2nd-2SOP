const { myDataSource } = require("./dataSource");

const findCartIndex = async (user_id) => {
  const [cartId] = await myDataSource.query(`
    SELECT id
    FROM carts
    WHERE user_id = '${user_id}' AND status = 0;
`);
  return cartId.id;
};
const createCart = async (userId) => {
  await myDataSource.query(`
  INSERT INTO carts (user_id) 
  VALUES (${userId});
  `);
  const [cartId] = await myDataSource.query(
    `SELECT LAST_INSERT_ID() AS insertId;`
  );
  return cartId.insertId;
};

// const addInCart = async (cartId, productId, price) => {
//   await myDataSource.query(`
//     INSERT INTO cart_items (product_id,cart_id,price, quantity) VALUE
//     (${productId}, ${cartId}, ${price}, 1);
//     `);
// };

const addInCart = async (cartId, productId, quantity) => {
  // Check if the cart item already exists
  const existingCartItem = await myDataSource.query(
    `SELECT id, quantity FROM cart_items WHERE cart_id = ${cartId} AND product_id = ${productId}`
  );

  if (existingCartItem.length > 0) {
    // If it exists, update the quantity
    const updatedQuantity = existingCartItem[0].quantity + quantity;
    await myDataSource.query(
      `UPDATE cart_items SET quantity = ${updatedQuantity} WHERE id = ${existingCartItem[0].id}`
    );
  } else {
    // If it doesn't exist, insert a new cart item
    await myDataSource.query(
      `INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (${cartId}, ${productId}, ${quantity})`
    );
  }
};

const showCart = async (cartId) => {
  const data = await myDataSource.query(`
  SELECT 
    carts.id AS cartId,
    cart_items.product_id AS productId,
    products.name AS productName,
    PRODUCT_SIZE_IMAGE.product_image AS productImage,
    PRODUCT_SIZE_IMAGE.product_size AS size,
    cart_items.price AS price,
    cart_items.quantity As quantity
  FROM
    cart_items
  JOIN
    carts ON carts.id = cart_items.cart_id
  JOIN
    products ON cart_items.product_id = products.id
  JOIN
    PRODUCT_SIZE_IMAGE ON products.id = PRODUCT_SIZE_IMAGE.product_id
  WHERE
    cart_items.cart_id = ${cartId};
  `);
  return data;
};

const deleteCartsDao = async (cartId, productId) => {
  try {
    await myDataSource.query(`
      DELETE FROM cart_items
      WHERE cart_id = ${cartId} AND product_id = ${productId};
    `);
  } catch (err) {
    const error = new Error("Error Dao");
    error.statusCode = 500;
    throw error;
  }
};

const cartDataFix = async (cartId, quantity, productId) => {
  await myDataSource.query(`
  UPDATE cart_items
  SET quantity = ${quantity}
  WHERE cart_id = ${cartId}
  AND product_id = ${productId};
  `);

  return await showCart(cartId);
};

module.exports = {
  // findCartIndex,
  showCart,
  addInCart,
  deleteCartsDao,
  cartDataFix,
  createCart,
  findCartIndex,
};
