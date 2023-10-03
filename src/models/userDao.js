const { myDataSource } = require("./dataSource");

const signUp = async (lastName, firstName, email, password) => {
  await myDataSource.query(
    `INSERT INTO users (lastname, firstname, email, password) VALUES (?, ?, ?, ?)`,
    [lastName, firstName, email, password]
  );
};

const existingUser = async (email) => {
  const [existingEmail] = await myDataSource.query(
    `SELECT * FROM users WHERE email = ?`,
    [email]
  );
  return existingEmail;
};

module.exports = { signUp, existingUser };
