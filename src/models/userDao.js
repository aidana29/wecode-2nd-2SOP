const dataSource = require("./dataSource")
const userController = require("../controllers/userController")

const signUp = async (lastName, firstName, email, password) => {
    await dataSource.query (
        `INSERT INTO users (lastName, firstName, email, password) VALUES (?, ?, ?, ?)`, 
        [lastName, firstName, email, password]
    );
};