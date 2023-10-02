const { DataSource } = require("./dataSource");

const signUp = async (lastName, firstName, email, password) => {
  await DataSource.query(
    `INSERT INTO users (last_name, first_name, email, password) VALUES (?, ?, ?, ?, ?)`,
    [lastName, firstName, email, password]
  );
};

const existingUser = async (email) => {
  const [emailCheck] = await DataSource.query(
    `SELECT * FROM users WHERE email = ?`,
    [email]
  );
  console.log(emailCheck);
  return emailCheck;
};

module.exports = { signUp, existingUser };
