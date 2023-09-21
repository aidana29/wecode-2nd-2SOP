const userDao = require("../models/userDao");

const signUp = async (lastName, firstName, email, password, phoneNumber) => {
  // 비밀번호 number, 소문자, 대문자, 특수문자, 5자 이상
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{4,16}$/;
  if (!passwordRegex.test(password)) {
    const error = new Error("NO_CHARACTERS");
    error.status = 400;
    throw error;
  }

  // Existing user check  - 이메일이 있는지 확인
  const emailCheck = await userDao.userByEmail(email);
  console.log(emailCheck);
  if (emailCheck.length > 0) {
    const error = new Error("EXISTING_USER");
    error.status = 400;
    throw error;
  }

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.status = 400;
    throw error;
  }

  await userDao.signUp(lastName, firstName, email, password, phoneNumber);
};

module.exports = { signUp };