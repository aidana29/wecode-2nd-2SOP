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

const findUserById = async (userId) => {
  const userById = await myDataSource.query(
    `SELECT id FROM users WHERE id = ?`, [userId]
  );
  return userById
}

module.exports = { signUp, existingUser, findUserById };
