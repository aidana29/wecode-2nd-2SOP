const { myDataSource } = require("./dataSource");

const findCartIndex = async (user_id) => {
  console.log("findcartindex",user_id)

  const [cartId] = await myDataSource.query(`
    SELECT id
    FROM carts
    WHERE user_id = '${user_id}' AND status = 0;
`);
//console.log("dao",cartId);
console.log(cartId.id);
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


const addInCart = async (cartId, productId, id,quantity) => {
  // Check if the cart item already exists
  const existingCartItem = await myDataSource.query(
    `SELECT id, quantity FROM cart_items 
    WHERE cart_id = ${cartId} AND product_size_img_id = ${id}`
  );

  if (existingCartItem.length > 0) {
    // If it exists, update the quantity
    const updatedQuantity = existingCartItem[0].quantity + quantity;
    await myDataSource.query(
      `UPDATE cart_items SET quantity = ${updatedQuantity} WHERE id = ${existingCartItem[0].id}`
    );
  } 
  else {
    // If it doesn't exist, insert a new cart item
    const price = await myDataSource.query(
      `SELECT price FROM product_size_image 
      WHERE product_id = ${productId} and id = ${id}`
    );
    console.log("price",price)
    const product_price = price[0].price
    console.log("product_price",product_price) 
    await myDataSource.query(
      `INSERT INTO cart_items (cart_id, product_id, price,quantity,product_size_img_id) 
       VALUES (${cartId}, ${productId}, ${product_price}, ${quantity},${id})`
    );
  }
  await myDataSource.query(`
  UPDATE cart_items ci
  JOIN products p ON ci.product_id = p.id
  JOIN PRODUCT_SIZE_IMAGE psi ON p.id = psi.product_id
  SET ci.price = psi.price
  WHERE ci.cart_id = ${cartId};
`);
};

const showCart = async (cartId) => {
  const data = await myDataSource.query(`
  SELECT 
    carts.id AS cartId,
    cart_items.product_id AS productId,
    PRODUCT_SIZE_IMAGE.id AS id,
    products.name AS productName,
    PRODUCT_SIZE_IMAGE.product_image AS productImage,
    PRODUCT_SIZE_IMAGE.product_size AS size,
    PRODUCT_SIZE_IMAGE.price AS price,
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
    cart_items.cart_id = ${cartId} 
    AND product_size_image.id = cart_items.product_size_img_id;
  `);
  console.log(data)
  return data;
};

const deleteCartsDao = async (cartId, productId,id) => {
  try {
    await myDataSource.query(`
      DELETE FROM cart_items
      WHERE cart_id = ${cartId} 
      AND product_id = ${productId}
      AND product_size_img_id = ${id};
    `);
  } catch (err) {
    const error = new Error("Error Dao");
    error.statusCode = 500;
    throw error;
  }
};

const cartDataFix = async (cartId, quantity, productId,id) => {
  await myDataSource.query(`
  UPDATE cart_items
  SET quantity = ${quantity}
  WHERE cart_id = ${cartId}
  AND product_id = ${productId}
  AND product_size_img_id = ${id};
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
