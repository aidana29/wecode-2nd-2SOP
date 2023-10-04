const { cartService } = require("../services");

const cartItem = async (req, res) => {
  try {
    const { cartId } = req.body;
    const { productId, quantity } = req.body; //selectIndex는 size를 의미함
    cartService.cartItem(cartId, productId, quantity);
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartGet = async (req, res) => {
  try {
    console.log("hi");
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartDelete = async (req, res) => {
  try {
    const { userId } = req.user;
    const { cartId } = req.body;
    //카트 정보가 유저아이디 같은지 확인
    await cartService.cartDelete(userId, cartId);
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};

const cartFix = async (req, res) => {
  try {
    const { cartId } = req.body;
    const cartData = req.body;
    await cartService.cartFix(cartId, cartData);
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};
module.exports = { cartItem, cartGet, cartDelete, cartFix };
