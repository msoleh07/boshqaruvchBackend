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
  addMincedMeat: [
    {
      quantity: {
        type: Number,
        default: 0,
      },
      addetTime: {
        type: Date,
        default: Date.now,
      },
      totalMoney: {
        type: Number,
        default: 0,
      },
      // Boshqa totalMoney
      otherTotalMoney: {
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
      addetTime: {
        type: Date,
        default: Date.now,
      },
      totalMoney: {
        type: Number,
        default: 0,
      },
      // Boshqa totalMoney
      otherTotalMoney: {
        type: Number,
        default: 0,
      },
    },
  ],

  // userStories maydoni
  userStories: [
    {
      addetTime: {
        type: Date,
        default: Date.now,
      },
      // Boshqa totalMoney
      mincedMeatOtherTotalMoney: {
        type: Number,
        default: 0,
      },
      meatOtherTotalMoney: {
        type: Number,
        default: 0,
      },
      // Boshqa totalMoney
      astOtherTotalMoney: {
        type: Number,
        default: 0,
      },
      addMincedMeat: [
        {
          quantity: {
            type: Number,
            default: 0,
          },
          addetTime: {
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
          addetTime: {
            type: Date,
            default: Date.now,
          },
          totalMoney: {
            type: Number,
            default: 0,
          },
        },
      ],
      ast: {
        addMincedMeat: [
          {
            quantity: {
              type: Number,
              default: 0,
            },
            addetTime: {
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
            addetTime: {
              type: Date,
              default: Date.now,
            },
            totalMoney: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    },
  ],

  // thingsThatAreOut maydoni
  thingsThatAreOut: [
    {
      addTime: {
        type: Date,
        default: Date.now,
      },
      personAbout: [
        {
          firstname: {
            type: String,
            required: true,
          },
          money: {
            type: Number,
            default: 0,
          },
        },
      ],
      totalMoney: {
        type: Number,
        default: 0,
      },
    },
  ],
});

// Modelni yaratish
const workerDB = model("Worker", workerSchema);

module.exports = { workerDB };
