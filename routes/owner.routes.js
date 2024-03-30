const express = require("express");
const ownerRoutes = express.Router();

const {
  getOwnData,
  ownLogin,
  ownLogout,
  ownSignUp,
} = require("../controller/owner.controller");

ownerRoutes.get("/", getOwnData);
ownerRoutes.post("/signup", ownSignUp);
ownerRoutes.post("/login", ownLogin);
ownerRoutes.post("/logout", ownLogout);

module.exports = ownerRoutes;
