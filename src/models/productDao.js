const { Timestamp } = require("typeorm");
const { myDataSource } = require("./dataSource");

const showMain = async () => {
  console.log("dao-showMain")
  const data = await myDataSource.query(
    `SELECT A.*, B.PRODUCT_IMAGE 
    FROM products A 
    JOIN (
        SELECT product_id, MAX(PRODUCT_IMAGE) AS PRODUCT_IMAGE
        FROM PRODUCT_SIZE_IMAGE
        GROUP BY product_id
    ) B ON A.id = B.product_id;`
    );
  console.log(data);
  return data;

};
const showSpecificProduct = async (productId) => {
  console.log(productId)
  // const [data]= await myDataSource.query(
  //   `SELECT * FROM PRODUCTS, PRODUCT_IMAGE, PRODUCT_INFO 
  //   WHERE PRODUCTS.ID = ${productId}
  //   AND PRODUCT_INFO.PRODUCT_ID = ${productId} `
  // )//중괄호없으면 에러남 왜죠? 달러만있으면안되남
  const product_data = await myDataSource.query(
    `SELECT * FROM PRODUCTS A, PRODUCT_INFO B
    WHERE A.ID = ${productId}
    AND A.ID = B.PRODUCT_ID`
  )
  const product_size_data = await myDataSource.query(
    `
    SELECT * FROM PRODUCT_SIZE_IMAGE
    WHERE PRODUCT_ID = ${productId}`
  )

  return {product_data,product_size_data};

};
const showCategory = async(category) => {
  const data = await myDataSource.query(
    `SELECT A.*, B.*
    FROM PRODUCTS A
    JOIN (
        SELECT *,
               ROW_NUMBER() OVER (PARTITION BY PRODUCT_ID ORDER BY ID DESC) AS rn
        FROM PRODUCT_SIZE_IMAGE
    ) B ON A.ID = B.PRODUCT_ID
    WHERE A.2_CATEGORY_id = (
        SELECT id
        FROM 1_category
        WHERE name = $'{CATEGORY}'
    ) AND B.rn = 1;`
  )
  return data;
}
module.exports = {
  showMain,
  showSpecificProduct,
  showCategory
};

