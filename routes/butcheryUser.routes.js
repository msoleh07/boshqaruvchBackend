const express = require("express");
const butcheryUser = express.Router();

const {
  getButcheryUser,
  butcheryUserSignUp,
  butcheryUserLogin,
  butcheryUserLogout,
} = require("../controller/butcheryUser.controller");

butcheryUser.get("/", getButcheryUser);
butcheryUser.post("/signup", butcheryUserSignUp);
butcheryUser.post("/login", butcheryUserLogin);
butcheryUser.post("/logout", butcheryUserLogout);

module.exports = butcheryUser;
