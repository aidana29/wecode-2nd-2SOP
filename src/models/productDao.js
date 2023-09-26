const { DataSource } = require("./dataSource");

const showMain = async (req,res) => {
  await DataSource.query(`SELECT * FROM PRODUCT, PRODUCT_IMAGE`);
};
const showSpecificProduct = async (productId) => {
  /*await dataSource.query(
    `SELECT * FROM PRODUCT, PRODUCT_IMAGE WHERE PRODUCT.ID = [$productId] `
  );*/
};
module.exports = {
  showMain,
  showSpecificProduct,
};

