const { cartDao } = require("../models");
const { throwError } = require("../utilities/throwError");

const cartItem = async (userId, productId, quantity) => {
  //카트id가 user_id와 일치하는지
  const exProducts = await cartDao.findCartIndex(userId);

  //사용 중인 카트가 있는지
  if (!(exProducts == undefined)) {
    await cartDao.addInCart(exProducts, productId, quantity);
  }
  //사용중인 카트가 없다면 새로운 카트를 만들고 값을 입력
  else {
    const cartId = await cartDao.createCart(userId);
    await cartDao.addInCart(cartId, productId, quantity);
  }
};

const cartGet = async (userId) => {
  const cartId = await cartDao.findCartIndex(userId);
  return await cartDao.showCart(cartId.id);
};

const cartDelete = async (cartId, productId) => {
  //읽어온 정보를 바탕으로 칼럼값 삭제하기
  await cartDao.deleteCartsDao(cartId, productId);
};

const cartFix = async (cartId, quantity, productId) => {
  //카트정보 일치하는지
  return await cartDao.cartDataFix(cartId, quantity, productId);
};

module.exports = { cartItem, cartDelete, cartGet, cartFix };
