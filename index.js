const express = require("express");
const cors = require("cors");

const coockiParser = require("cookie-parser");

require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 5500;

const app = express();

app.use(express.json());
app.use(cors());
app.use(coockiParser());

app.get("/", (req, res) => res.send(`<h1>Welcome to work server</h1>`));

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
