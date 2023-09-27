const { myDataSource } = require("./dataSource");

const orderPayment = async (req) => {
  myDataSource.query(`
    INSERT INTO
    `);
};

module.exports = { orderPayment };
