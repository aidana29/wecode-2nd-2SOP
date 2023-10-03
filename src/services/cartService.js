const { cartDao } = require("../models");

// const cartIn = async () => {
//   console.log("hi");
// };

const cartItem = async (cartId, productId, selectIndex, quantity) => {
  //카트id가 user_id와 일치하는지
  const exProducts = await cartDao.findCartIndex(userId);
  await cartDao.addInCart(cartId, productId, selectIndex, quantity);
};

const cartGet = async () => {
  console.log("hi");
};

const cartDelete = async (userId, productId) => {
  //카트 정보 알기 위해서는 유저정보
  //읽어온 정보를 바탕으로 칼럼값 삭제하기
  await cartDao.delete(userId, productId);
};

const cartFix = async (cartId, cartData) => {
  //카트정보 일치하는지
  await cartDao.cartDataFix(cartId, cartData);
};

module.exports = { cartItem, cartDelete, cartGet, cartFix };
