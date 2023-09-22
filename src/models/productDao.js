const dataSource = require("./dataSource");
const productController = require("../controllers/productController");

const showMain = async (req, res) => {
  await dataSource.query(`SELECT * FROM PRODUCTS`);
};
/*
const showSpecificProduct = async (? ? ?) => {
    await dataSource.query (
        `INSERT INTO users (lastName, firstName, email, password) VALUES (?, ?, ?, ?)`, 
        [lastName, firstName, email, password]
    );
};
*/
