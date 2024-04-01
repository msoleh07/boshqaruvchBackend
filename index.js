const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("colors");

const nodeCron = require("node-cron");

const PORT = process.env.PORT || 5500;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send(`<h1>Welcome to work server</h1>`));

app.use("/api/butcheryUser", function (req, res, next) {
  // node-cron ishga tushirish
  nodeCron.schedule("* * * * * *", function () {});
  // Keyingi middleware ga o'tish
  next();
});

app.use("/api/workerUser", function (req, res, next) {
  // node-cron ishga tushirish
  nodeCron.schedule("* * * * * *", function () {});
  // Keyingi middleware ga o'tish
  next();
});

app.use("/api/owner", function (req, res, next) {
  // node-cron ishga tushirish
  nodeCron.schedule("* * * * * *", function () {});
  // Keyingi middleware ga o'tish
  next();
});

app.use("/api/prices", function (req, res, next) {
  // node-cron ishga tushirish
  nodeCron.schedule("* * * * * *", function () {});
  // Keyingi middleware ga o'tish
  next();
});

const butcheryUserRoutes = require("./routes/butcheryUser.routes"); // <-- 'butcheryUserRoutes' nomi to'g'rilandi
const workerUserRoutes = require("./routes/workerUser.routes"); // <-- 'workerUserRoutes' nomi to'g'rilandi
const ownerRoutes = require("./routes/owner.routes"); // <-- 'ownerRoutes' nomi to'g'rilandi
const pricesRoute = require("./routes/prices.routes"); // <-- 'pricesRoute' nomi to'g'rilandi
app.use("/api/butcheryUser", butcheryUserRoutes);
app.use("/api/workerUser", workerUserRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/prices", pricesRoute);

const { connectToMongoDB } = require("./db/connectToMongoDB");

app.listen(PORT, () => {
  console.log(`app listen port: http://localhost:${PORT}`.bgBlue);
  connectToMongoDB();
});
