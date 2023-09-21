const { myDataSource } = require("./dataSource");

const signUp = async (lastName, firstName, email, password, phoneNumber) => {
  await myDataSource.query(
    `INSERT INTO users (last_name, first_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)`,
    [lastName, firstName, email, password, phoneNumber]
  );
};

const userByEmail = async (email) => {
  const emailCheck = await myDataSource.query(
    `SELECT email FROM users WHERE email = ?`,
    [email]
  );
  return emailCheck;
};

module.exports = { signUp, userByEmail };
