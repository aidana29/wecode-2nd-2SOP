const { cartService } = require("../services");

const cartItem = async (req, res) => {
  try {
    const { productId, selectIndex, quantity } = req.body; //selectIndex는 size를 의미함
    cartService.cartItem(productId, selectIndex, quantity);
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
module.exports = { cartItem, cartGet };
