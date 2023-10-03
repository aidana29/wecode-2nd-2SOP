const {productDao} = require("../models");

const showMain = async(req, res) => {
  /*
  const showMain = await productDao.showMain(req,res);
  if (!res) {
    const error = new Error("NO PRODUCT");
    error.status = 400;
    throw error;
  }*/
  console.log("service-he")
  // const ans = await productDao.showMain(req,res);//231002return을 어떻게 하는지
  return await productDao.showMain(req,res);
};
const showSpecificProduct = async(productId) => {
  return await productDao.showSpecificProduct(productId);

};

module.exports = { 
  showMain,
  showSpecificProduct
 };