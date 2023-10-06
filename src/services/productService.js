const {productDao} = require("../models");

const showMain = async() => {
  const data = await productDao.showMain();
  return data;
};

const showSpecificProduct = async(productId) => { 
  if(!productId){
    const error = new Error("NO_PRODUCT_ID");
    error.status = 400;
    throw error;
  }
  const data = await productDao.showSpecificProduct(productId);
  return data;
};

const showCategory = async(category) => {ㄴ
  if(!category){
    const error = new Error("NO_EXISITNG_CATEGORY");
    error.status = 400;
    throw error;
  }
  const data = await productDao.showCategory(category);
  return data;
};

module.exports = { 
  showMain,
  showSpecificProduct,
  showCategory
 };