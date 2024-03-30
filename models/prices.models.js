const { Schema, model } = require("mongoose");

const shashlikxonaSchema = new Schema({
  mincedMeat: { type: Number, default: 0 },
  meat: { type: Number, default: 0 },
});

const goshtxonaSchema = new Schema({
  mincedMeat: { type: Number, default: 0 },
  meat: { type: Number, default: 0 },
  meatKG: { type: Number, default: 0 },
});

const shashlikxonaDB = model("Shashlikxona", shashlikxonaSchema);

const goshtxonaDB = model("Goshtxona", goshtxonaSchema);

module.exports = { shashlikxonaDB, goshtxonaDB };
