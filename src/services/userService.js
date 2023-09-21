const userDao = require("../models/userDao");

const signUp = async (lastName, firstName, email, password, phoneNumber) => {

    // 비밀번호 number, 소문자, 대문자, 특수문자, 5자 이상
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*).$/

    // if (!passwordRegex.test(password)) {
    //     const error = new Error ("NO_CHARACTERS")
    //     error.status = 400
    //     throw error
    // }

    await userDao.signUp(lastName, firstName, email, password, phoneNumber);
}

module.exports = { signUp }