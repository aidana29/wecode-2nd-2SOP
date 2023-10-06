const { myDataSource } = require("./dataSource");

const showMain = async () => {
  const data = await myDataSource.query(
    `SELECT A.ID, A.name,  
    (SELECT name FROM 1_CATEGORY WHERE ID = A.2_category_id) as productCategory,
    A.description, B.PRODUCT_IMAGE 
    FROM products A 
    JOIN ( 
      SELECT product_id, MAX(PRODUCT_IMAGE) AS PRODUCT_IMAGE
       FROM PRODUCT_SIZE_IMAGE GROUP BY product_id ) B
       ON A.id = B.product_id;`
    );
  console.log(data);
  return data;

};
const showSpecificProduct = async (productId) => {
  console.log(productId)
  const product_data = await myDataSource.query(
    `SELECT A.ID, A.NAME,(SELECT name FROM 1_CATEGORY WHERE ID = A.2_category_id) as productCategory, 
    A.DESCRIPTION, B.*
    FROM PRODUCTS A, PRODUCT_INFO B
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
  const product_data = await myDataSource.query(`
  SELECT id, name, description, (SELECT name FROM 1_CATEGORY WHERE ID = 2_category_id) as productCategory
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

