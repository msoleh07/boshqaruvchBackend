const express = require("express");
const butcheryUser = express.Router();

const {
  getButcheryUser,
  butcheryUserSignUp,
  butcheryUserLogin,
  addMeatKG,
} = require("../controller/butcheryUser.controller");

butcheryUser.get("/", getButcheryUser);
butcheryUser.post("/signup", butcheryUserSignUp);
butcheryUser.post("/login", butcheryUserLogin);
butcheryUser.post("/addMeatKG", addMeatKG);

module.exports = butcheryUser;
