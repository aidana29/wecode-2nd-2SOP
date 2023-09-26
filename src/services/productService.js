const { productDao } = require("../models/productDao");
//const { throwError } = require("../utils/throwError");
const showMain = async (req,res) => {
  // query thread from db
  const products = await productDao.showMain();

  return products;
};

const showSpecificProduct = async (req, res) => {
  let productId = req.productId;
};
module.exports = {
  showMain,
  showSpecificProduct,
};
