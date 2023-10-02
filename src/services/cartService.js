const { cartDao } = require("../models");

// const cartIn = async () => {
//   console.log("hi");
// };

// const cartGet = async () => {
//   console.log("hi");
// };
const cartItem = async (productId, selectIndex, quantity) => {
  //카트id가 user_id와 일치하는지
  const exProducts = await cartDao.findCartIndex(userId);
  await cartDao.addInCart(productId, exProducts, quantity);
};

const deleteCartsDao = async (productId) => {
  if (products[0].amount === 1) {
    await deleteCartsDao(productId);
  }
};

module.exports = { cartItem, deleteCartsDao };
