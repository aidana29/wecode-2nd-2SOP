const { cartService } = require("../services");

const cartIn = async (req, res) => {
  const { productId, selectIndex, quantity } = req.body; //selectIndex는 size를 의미함
  cartService.cartIn(productId, selectIndex, quantity);
};

const cartGet = async (req, res) => {
  console.log("hi");
};
module.exports = { cartIn, cartGet };
