const express = require("express");
const butcheryUser = express.Router();

const {
  getButcheryUser,
  butcheryUserSignUp,
  butcheryUserLogin,
  addMeatKG,
  butcheryDeleteOneUser,
} = require("../controller/butcheryUser.controller");

butcheryUser.get("/", getButcheryUser);
butcheryUser.post("/signup", butcheryUserSignUp);
butcheryUser.post("/login", butcheryUserLogin);
butcheryUser.post("/addMeatKG", addMeatKG);
butcheryUser.delete("/deleteOneUser/:id", butcheryDeleteOneUser);

module.exports = butcheryUser;
