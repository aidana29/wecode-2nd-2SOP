const productDao = require("../models");

const showMain = (req, res) => {
  //함수 컨벤션 확인 부탁드려요
  /*
    // 비밀번호 number, 소문자, 대문자, 특수문자, 5자 이상
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*).$/

    if (!passwordRegex.test(password)) {
        const error = new Error ("NO_CHARACTERS")
        error.status = 400
        throw error
    }
*/
};

module.exports = { showMain };
