const { Schema, model } = require("mongoose");

const ownSchema = new Schema({
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
    default: "owner",
    required: true,
  },
});

const ownerDB = model("Owner", ownSchema);

module.exports = { ownerDB };
