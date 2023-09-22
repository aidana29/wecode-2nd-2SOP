const userService = require("../services/userService");

const signUp = async(req, res) => {

    const { lastName, firstName, email, password, phoneNumber } = req.body;

    if (!lastName || !firstName || !email || !password || !phoneNumber){
        const error = new Error("KEY_ERROR")
        error.status = 400
        throw error
    };

    await userService.signUp(lastName, firstName, email, password, phoneNumber);

    res.status(201).json({ message: "USER_CREATED" });
}

module.exports = {
    signUp
}