const { userDao } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (lastName, firstName, email, password) => {
  if (!lastName || !firstName || !email || !password) {
    const error = new Error("KEY_ERROR");
    error.status = 400;
    throw error;
  }

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.status = 400;
    throw error;
  }

  // Existing user check  - 이메일이 있는지 확인
  const existingEmail = await userDao.existingUser(email);

  if (existingEmail) {
    const error = new Error("EXISTING_USER");
    error.status = 400;
    throw error;
  }

  // 비밀번호 number, 소문자, 대문자, 특수문자, 5자 이상
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{4,16}$/;
  if (!passwordRegex.test(password)) {
    const error = new Error("PASSWORD_NO_CHARACTERS");
    error.status = 400;
    throw error;
  }

  // 비밀번호 암호화
  const saltRounds = 10;
  const encodedPassword = await bcrypt.hash(password, saltRounds);

  await userDao.signUp(lastName, firstName, email, encodedPassword);
};

const signIn = async (email, password) => {
  if (!email || !password) {
    const error = new Error("KEY_ERROR");
    error.status = 400;
    throw error;
  }

  const existingUser = await userDao.existingUser(email);
  if (!existingUser) {
    const error = new Error("NOT_REGISTERED");
    error.status = 400;
    throw error;
  }

  // 비밀번호 확인
  const isPasswordRight = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordRight) {
    const error = new Error("WRONG_PASSWORD");
    error.status = 400;
    throw error;
  }

  const token = jwt.sign({ userId: existingUser.id }, process.env.SECRET);
  return token;
};

const findUserId = async (userId) => {
  const userById = await userDao.findUserById(userId);

  if (!userById) {
    const error = new Error("NO_USER_ID");
    error.status = 400;
    throw error;
  }
};

module.exports = { signUp, signIn, findUserId };
