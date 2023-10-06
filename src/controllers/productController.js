const {productService}= require("../services");

const showMain = async (req, res) => {
  try {
    const data = await productService.showMain(req,res);
    res.status(201).json({
       message:"SHOW MAIN PAGE",
       data:data
    });
  } catch (error) {
    console.log("error", error);
    res.status(error.status).json({ message: error.message });
  }
};
const showSpecificProduct = async (req,res) => {
  try{
  const { category,secondCategory,productId } = req.params;
  const data = await productService.showSpecificProduct(productId);

  res.status(201).json({ 
    message: "SHOW SPECIFIC PRODUCT",
    data:data });
  }
    catch (error) {
      console.log("error", error);
      res.status(error.status).json({ message: error.message });
  }
};
 const showCategory = async (req,res) => {
  try{
    const { category } = req.params;  
    const data = await productService.showCategory(category);
    res.status(201).json({ 
      message: "SHOW CATEGORY",
      data:data });
    }
    catch (error) {
      console.log("error", error);
      res.status(error.status).json({ message: error.message });
    }
  };

module.exports = {
  showMain,
  showSpecificProduct,
  showCategory
};
