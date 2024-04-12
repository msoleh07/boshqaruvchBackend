const { Schema, model } = require("mongoose");

const workerSchema = new Schema({
  // Avvalgi maydonlar
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "worker",
    required: true,
  },

  // addMincedMeat va addMeat uchun maydonlar
  addMincedMeat: {
    type: [
      {
        addetTime: { type: Date, default: Date.now },
        money: {
          totalMoney: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
        },
        mincedMeat: {
          quantity: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
          totalMoney: { type: Number, default: 0 },
          addWorkerName: { type: String, default: "" },
        },
      },
    ],
    default: [],
  },
  addMeat: {
    type: [
      {
        addetTime: { type: Date, default: Date.now },
        money: {
          totalMoney: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
        },
        meat: {
          quantity: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
          totalMoney: { type: Number, default: 0 },
          addWorkerName: { type: String, default: "" },
        },
      },
    ],
    default: [],
  },
  userStories: {
    type: [
      {
        addedTime: { type: Date, default: Date.now },
        addMincedMeat: {
          type: [
            {
              addetTime: { type: Date, default: Date.now },
              money: {
                totalMoney: { type: Number, default: 0 },
                addetTime: { type: Date, default: Date.now },
              },
              mincedMeat: {
                quantity: { type: Number, default: 0 },
                addetTime: { type: Date, default: Date.now },
                totalMoney: { type: Number, default: 0 },
                addWorkerName: { type: String, default: "" },
              },
            },
          ],
          default: [],
        },
        addMeat: {
          type: [
            {
              addetTime: { type: Date, default: Date.now },
              money: {
                totalMoney: { type: Number, default: 0 },
                addetTime: { type: Date, default: Date.now },
              },
              meat: {
                quantity: { type: Number, default: 0 },
                addetTime: { type: Date, default: Date.now },
                totalMoney: { type: Number, default: 0 },
                addWorkerName: { type: String, default: "" },
              },
            },
          ],
          default: [],
        },
        ast: {
          addMincedMeat: {
            type: [
              {
                addetTime: { type: Date, default: Date.now },
                money: {
                  totalMoney: { type: Number, default: 0 },
                  addetTime: { type: Date, default: Date.now },
                },
                mincedMeat: {
                  quantity: { type: Number, default: 0 },
                  addetTime: { type: Date, default: Date.now },
                  totalMoney: { type: Number, default: 0 },
                },
              },
            ],
            default: [],
          },
          addMeat: {
            type: [
              {
                addetTime: { type: Date, default: Date.now },
                money: {
                  totalMoney: { type: Number, default: 0 },
                  addetTime: { type: Date, default: Date.now },
                },
                meat: {
                  quantity: { type: Number, default: 0 },
                  addetTime: { type: Date, default: Date.now },
                  totalMoney: { type: Number, default: 0 },
                },
              },
            ],
            default: [],
          },
        },
      },
    ],
    default: [],
  },

  // thingsThatAreOut maydoni
  thingsThatAreOut: {
    addTime: { type: Date, default: Date.now },
    personAbout: [
      {
        firstname: { type: String, required: true },
        money: { type: Number, default: 0 },
      },
    ],
    totalMoney: { type: Number, default: 0 },
  },
});

// Modelni yaratish
const workerDB = model("Worker", workerSchema);

module.exports = { workerDB };
