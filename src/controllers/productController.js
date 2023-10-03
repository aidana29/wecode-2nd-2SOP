const {productService}= require("../services");

const showMain = async (req, res) => {
  try {
    //console.log(req)
    //console.log("params",req.params)
    const data = await productService.showMain(req,res);
    //console.log(data);
    res.status(201).json({
       message:"PRODUCT MESSAGE CREATED",
       data:data
    });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }

};
const showSpecificProduct = async (req,res) => {
  const { category,secondCategory,productId } = req.params;

  console.log("콘솔",productId);
 const data = await productService.showSpecificProduct(productId);

  res.status(201).json({ 
    message: "show specific product",
    data:data });
};

module.exports = {
  showMain,
  showSpecificProduct,
};
