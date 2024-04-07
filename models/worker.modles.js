// const { Schema, model } = require("mongoose");

// const workerSchema = new Schema({
//   // Avvalgi maydonlar
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     default: "worker",
//     required: true,
//   },

//   // addMincedMeat va addMeat uchun maydonlar
//   addMincedMeat: {
//     money: {
//       totalMoney: { type: Number, default: 0 },
//       addetTime: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//     mincedMeat: [
//       {
//         quantity: {
//           type: Number,
//           default: 0,
//         },
//         addetTime: {
//           type: Date,
//           default: Date.now,
//         },
//         totalMoney: {
//           type: Number,
//           default: 0,
//         },
//       },
//     ],
//   },
//   addMeat: {
//     money: {
//       totalMoney: { type: Number, default: 0 },
//       addetTime: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//     meat: [
//       {
//         quantity: {
//           type: Number,
//           default: 0,
//         },
//         addetTime: {
//           type: Date,
//           default: Date.now,
//         },
//         totalMoney: {
//           type: Number,
//           default: 0,
//         },
//       },
//     ],
//   },

//   // userStories maydoni
//   userStories: {
//     addetTime: {
//       type: Date,
//       default: Date.now,
//     },
//     money: {
//       totalMoney: { type: Number, default: 0 },
//       addetTime: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//     addMincedMeat: {
//       money: {
//         totalMoney: { type: Number, default: 0 },
//         addetTime: {
//           type: Date,
//           default: Date.now,
//         },
//       },
//       mincedMeat: [
//         {
//           quantity: {
//             type: Number,
//             default: 0,
//           },
//           addetTime: {
//             type: Date,
//             default: Date.now,
//           },
//           totalMoney: {
//             type: Number,
//             default: 0,
//           },
//         },
//       ],
//     },
//     addMeat: {
//       money: {
//         totalMoney: { type: Number, default: 0 },
//         addetTime: {
//           type: Date,
//           default: Date.now,
//         },
//       },
//       meat: [
//         {
//           quantity: {
//             type: Number,
//             default: 0,
//           },
//           addetTime: {
//             type: Date,
//             default: Date.now,
//           },
//           totalMoney: {
//             type: Number,
//             default: 0,
//           },
//         },
//       ],
//     },
//     ast: {
//       addMincedMeat: [
//         {
//           money: {
//             totalMoney: { type: Number, default: 0 },
//             addetTime: {
//               type: Date,
//               default: Date.now,
//             },
//           },
//         },
//         {
//           quantity: {
//             type: Number,
//             default: 0,
//           },
//           addetTime: {
//             type: Date,
//             default: Date.now,
//           },
//           totalMoney: {
//             type: Number,
//             default: 0,
//           },
//         },
//       ],
//       addMeat: [
//         {
//           money: {
//             totalMoney: { type: Number, default: 0 },
//             addetTime: {
//               type: Date,
//               default: Date.now,
//             },
//           },
//         },
//         {
//           quantity: {
//             type: Number,
//             default: 0,
//           },
//           addetTime: {
//             type: Date,
//             default: Date.now,
//           },
//           totalMoney: {
//             type: Number,
//             default: 0,
//           },
//         },
//       ],
//     },
//   },

//   // thingsThatAreOut maydoni
//   thingsThatAreOut: {
//     addTime: {
//       type: Date,
//       default: Date.now,
//     },
//     personAbout: [
//       {
//         firstname: {
//           type: String,
//           required: true,
//         },
//         money: {
//           type: Number,
//           default: 0,
//         },
//       },
//     ],
//     totalMoney: {
//       type: Number,
//       default: 0,
//     },
//   },
// });

// // Modelni yaratish
// const workerDB = model("Worker", workerSchema);

// module.exports = { workerDB };

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
