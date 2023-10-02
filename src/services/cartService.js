const { cartDao } = require("../models");

// const cartIn = async () => {
//   console.log("hi");
// };

// const cartGet = async () => {
//   console.log("hi");
// };
const cartItem = async (productId, selectIndex, quantity) => {
  const exProducts = await cartDao.findCartIndex(userId);
  await cartDao.cartItem(productId, exProducts, quantity);
};

const deleteCartsDao = async (productId) => {
  if (products[0].amount === 1) {
    await deleteCartsDao(productId);
  }
};

module.exports = { cartItem, deleteCartsDao };
