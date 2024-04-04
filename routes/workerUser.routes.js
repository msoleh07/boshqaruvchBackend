const express = require("express");
const workerUserRoutes = express.Router();

const {
  getWorkerUser,
  workerUserSignUp,
  workerUserLogin,
  workerAddData,
} = require("../controller/workerUser.controller");

workerUserRoutes.get("/", getWorkerUser);
workerUserRoutes.post("/signup", workerUserSignUp);
workerUserRoutes.post("/login", workerUserLogin);
workerUserRoutes.post("/addData", workerAddData);

module.exports = workerUserRoutes;
