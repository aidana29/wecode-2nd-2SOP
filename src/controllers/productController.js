const productService = require("../services/productService");

const showMain = async (req, res) => {
  const { product_id } = req.body;

  await productService.showMain(product_id);

  res.status(201).json({ message: "show main product" });
};

const showSpecificProduct = async (req, res) => {
  /* const { product_id } = req.body;
  //이해했어
  //controller에서 req.body받아서 productid에 대입해준다음
  //service 콜함
  //ㅋㅋ
  await productService.showSpecificProduct(product_id);
  res.status(201).json({ message: "show specific product" });
*/
};

module.exports = {
  showMain,
  showSpecificProduct,
};
