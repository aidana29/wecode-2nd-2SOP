const { cartDao } = require("../models");
const { throwError } = require("../utilities/throwError");

const cartItem = async (userId, productId,id, quantity) => {
  //카트id가 user_id와 일치하는지
  const exProducts = await cartDao.findCartIndex(userId);

  //사용 중인 카트가 있는지
  if (!(exProducts == undefined)) {
    await cartDao.addInCart(exProducts, productId,id, quantity);
  }
  //사용중인 카트가 없다면 새로운 카트를 만들고 값을 입력
  else {
    const cartId = await cartDao.createCart(userId);
    await cartDao.addInCart(cartId, productId, id,quantity);
  }
};

const cartGet = async (userId) => {
  const cartId = await cartDao.findCartIndex(userId);
  console.log("cartgetservice",cartId)
  return await cartDao.showCart(cartId);
};

const cartDelete = async (cartId, productId,id) => {
  //읽어온 정보를 바탕으로 칼럼값 삭제하기
  await cartDao.deleteCartsDao(cartId, productId,id);
};

const cartFix = async (cartId, quantity, productId,id) => {
  //카트정보 일치하는지
  return await cartDao.cartDataFix(cartId, quantity, productId,id);
};

module.exports = { cartItem, cartDelete, cartGet, cartFix };
