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
  console.log(category)
  // const data = await myDataSource.query(
  //   `SELECT * FROM PRODUCTS ,product_size_image 
  //   WHERE PRODUCT_ID IN ( 
  //     SELECT id FROM products WHERE 2_category_id = ( 
  //       SELECT id FROM 1_category WHERE name = ? ) ) 
  //       AND PRODUCTS.ID = PRODUCT_SIZE_IMAGE.PRODUCT_ID`,
  //       [category]
//   // )
  const product_data = await myDataSource.query(`
  SELECT * 
FROM products 
WHERE 2_category_id IN (SELECT id 
             FROM 1_category 
             WHERE name = ?)
             `,[category])
    const length = product_data.length
//console.log(product_data)
console.log(length)
const data = []
for(let i = 0; i < length;i++){
  const product_size_image = await myDataSource.query(`

  SELECT *
  
  FROM product_size_image
  
  WHERE product_id = ?`,[product_data[i].id])
  data.push({
    product: product_data[i],
    product_size_image: product_size_image
  });
}
  
  return data;
}
module.exports = {
  showMain,
  showSpecificProduct,
  showCategory
};

