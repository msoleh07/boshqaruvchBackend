const workerUserRoutes = require("express").Router();

const {
  getWorkerUser,
  workerUserSignUp,
  workerUserLogin,
  workerUserLogout,
  workerAddData,
} = require("../controller/workerUser.controller");

workerUserRoutes.get("/", getWorkerUser);
workerUserRoutes.post("/signup", workerUserSignUp);
workerUserRoutes.post("/login", workerUserLogin);
workerUserRoutes.post("/logout", workerUserLogout);
workerUserRoutes.post("/addData", workerAddData);

module.exports = workerUserRoutes;
