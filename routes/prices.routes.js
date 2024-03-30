const pricesRoute = require("express").Router();

const {
  createGoshtxonaPrice,
  createShashlikxonaPrice,
  getGoshtxonaPrices,
  getShashlikPrices,
  updateGoshtxonaPrice,
  updateShashlikxonaPrice,
} = require("../controller/prices.controller");

pricesRoute.get("/shPrices", getShashlikPrices);
pricesRoute.get("/gPrices", getGoshtxonaPrices);

pricesRoute.post("/createPriceWorker", createShashlikxonaPrice);
pricesRoute.post("/createPriceButchery", createGoshtxonaPrice);

pricesRoute.put("/shPricesUpdate/:id", updateShashlikxonaPrice);
pricesRoute.put("/gPricesUpdate/:id", updateGoshtxonaPrice);

module.exports = pricesRoute;
