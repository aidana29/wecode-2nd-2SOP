const { cartDao } = require("../models");

// const cartIn = async () => {
//   console.log("hi");
// };

const cartItem = async (userId, productId, quantity) => {
  //카트id가 user_id와 일치하는지
  const exProducts = await cartDao.findCartIndex(userId);

  //사용 중인 카트가 있는지
  //사용중인 카트가 없다면 새로운 카트를 만들고 값을 입력
  await cartDao.addInCart(cartId, productId, quantity);
};

const cartGet = async (userId) => {
  const cartId = await cartDao.findCartIndex(userId);
  return await cartDao.showCart(cartId);
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
