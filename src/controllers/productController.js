const {productService}= require("../services");

const showMain = async (req, res) => {
  try {

    const data = await productService.showMain();
    //231003 req, res 받을 필요가 없다. 
    //console.log(data);
    //오키오키 알겠습니다.
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
  try{
  const { category,secondCategory,productId } = req.params;

  console.log("콘솔",productId);
 const data = await productService.showSpecificProduct(productId);

  res.status(201).json({ 
    message: "show specific product",
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
  
    console.log("콘솔",category);
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
