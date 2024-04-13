const express = require("express");
const workerUserRoutes = express.Router();

const {
  getWorkerUser,
  workerUserSignUp,
  workerUserLogin,
  workerAddData,
  workerDeleteOneUser,
} = require("../controller/workerUser.controller");

workerUserRoutes.get("/", getWorkerUser);
workerUserRoutes.post("/signup", workerUserSignUp);
workerUserRoutes.post("/login", workerUserLogin);
workerUserRoutes.post("/addData", workerAddData);
workerUserRoutes.delete("/deleteOneUser/:id", workerDeleteOneUser);

module.exports = workerUserRoutes;
