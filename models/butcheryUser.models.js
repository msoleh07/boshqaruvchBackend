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
  addMincedMeat: [
    {
      quantity: {
        type: Number,
        default: 0,
      },
      addedTime: {
        type: Date,
        default: Date.now,
      },
      totalMoney: {
        type: Number,
        default: 0,
      },
    },
  ],
  addMeat: [
    {
      quantity: {
        type: Number,
        default: 0,
      },
      addedTime: {
        type: Date,
        default: Date.now,
      },
      totalMoney: {
        type: Number,
        default: 0,
      },
    },
  ],
  addMeatKg: [
    {
      quantity: {
        type: Number,
        default: 0,
      },
      addedTime: {
        type: Date,
        default: Date.now,
      },
      totalMoney: {
        type: Number,
        default: 0,
      },
    },
  ],
  userStories: [
    {
      addedTime: { type: Date, default: Date.now },
      addMincedMeat: [
        {
          quantity: {
            type: Number,
            default: 0,
          },
          addedTime: {
            type: Date,
            default: Date.now,
          },
          totalMoney: {
            type: Number,
            default: 0,
          },
        },
      ],
      addMeat: [
        {
          quantity: {
            type: Number,
            default: 0,
          },
          addedTime: {
            type: Date,
            default: Date.now,
          },
          totalMoney: {
            type: Number,
            default: 0,
          },
        },
      ],
      addMeatKg: [
        {
          quantity: {
            type: Number,
            default: 0,
          },
          addedTime: {
            type: Date,
            default: Date.now,
          },
          totalMoney: {
            type: Number,
            default: 0,
          },
        },
      ],
      totalMoney: { type: Number, default: 0 },
    },
  ],
  personAbout: [
    {
      addedTime: { type: Date, default: Date.now },
      addExitData: [
        {
          firstname: {
            type: String,
            required: true,
          },
          totalMoney: { type: Number, default: 0 },
        },
      ],
    },
  ],
  monthMoney: {
    exitMoney: { type: Number, default: 0 },
    totalMoney: { type: Number, default: 0 },
    toGiveMoney: { type: Boolean, default: false },
  },
});

const butcheryUserDB = model("ButcheryUser", userSchema);
module.exports = { butcheryUserDB };
