const { myDataSource } = require("./dataSource");

const showMain = async (req,res) => {
  console.log("dao-hi")
  const data = await myDataSource.query(
    `select A.*, B.img_url From product A, product_image B 
    where A.id = B.product_id`
    );
  console.log(data);
  return data;

};
const showSpecificProduct = async (productId) => {
  console.log(productId)
  const [data] = await myDataSource.query(
    `SELECT * FROM PRODUCT, PRODUCT_IMAGE WHERE PRODUCT.ID = ${productId} `
  )//중괄호없으면 에러남 왜죠? 달러만있으면안되남
  console.log(data)
  return [data];

};
module.exports = {
  showMain,
  showSpecificProduct,
};

