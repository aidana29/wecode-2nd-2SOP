const { cartService } = require("../services")

const cartItem = async(req, res) => {
    try {
      const { productId, selectIndex, quantity } = req.body; //selectIndex는 size를 의미함
      const cartService.cartItem(productId, selectIndex, quantity) 
    } catch (error) {
        
    }
}

const cartGet = async (req, res) => {
  console.log("hi");
};
module.exports = { cartIn, cartGet };

