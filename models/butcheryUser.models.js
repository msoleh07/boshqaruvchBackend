const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
    default: "butchery",
    required: true,
  },
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
  addMeatKg: {
    type: [
      {
        addetTime: { type: Date, default: Date.now },
        money: {
          totalMoney: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
        },
        meatKg: {
          quantity: { type: Number, default: 0 },
          addetTime: { type: Date, default: Date.now },
          totalMoney: { type: Number, default: 0 },
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
          type: {
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
          default: {},
        },
        addMeat: {
          type: {
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

          default: {},
        },
        addMeatKg: {
          type: {
            addetTime: { type: Date, default: Date.now },
            money: {
              totalMoney: { type: Number, default: 0 },
              addetTime: { type: Date, default: Date.now },
            },
            meatKg: {
              quantity: { type: Number, default: 0 },
              addetTime: { type: Date, default: Date.now },
              totalMoney: { type: Number, default: 0 },
            },
          },
          default: {},
        },
      },
    ],
  },

  personAbout: {
    type: [
      {
        addedTime: { type: Date, default: Date.now },
        addExitData: {
          type: {
            firstname: {
              type: String,
              required: true,
            },
            totalMoney: { type: Number, default: 0 },
          },
        },
      },
    ],
    default: [],
  },

  monthMoney: {
    exitMoney: { type: Number, default: 0 },
    totalMoney: { type: Number, default: 0 },
    toGiveMoney: { type: Boolean, default: false },
  },
});

const butcheryUserDB = model("ButcheryUser", userSchema);
module.exports = { butcheryUserDB };
