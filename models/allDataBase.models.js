const { Schema, model } = require("mongoose");

const databaseSchema = new Schema({
  //qiyma qo'shishi
  addMincedMeat: [
    {
      addetTime: { type: String, default: new Date().toLocaleString() },
      quantity: [
        {
          addTime: { type: String, default: new Date().toLocaleString() },
          type: Number,
          default: 0,
        },
      ],
    },
    {
      totalMoney: { type: Number, default: 0 },
    },
  ],
  //torgamchi
  addMeat: [
    {
      addetTime: { type: String, default: new Date().toLocaleString() },
      quantity: [
        {
          addTime: { type: String, default: new Date().toLocaleString() },
          type: Number,
          default: 0,
        },
      ],
    },
    {
      totalMoney: { type: Number, default: 0 },
    },
  ],
  // son gosht
  addMeatKg: [
    {
      addetTime: { type: String, default: new Date().toLocaleString() },
      quantity: [
        {
          addTime: { type: String, default: new Date().toLocaleString() },
          type: Number,
          default: 0,
        },
      ],
    },
    {
      totalMoney: { type: Number, default: 0 },
    },
  ],
});

const databaseDB = model("DataBase", databaseSchema);

module.exports = { databaseDB };
