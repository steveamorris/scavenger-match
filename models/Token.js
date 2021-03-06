const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Token name required.",
  },
  imgUrl: {
    type: String,
    trim: true,
    required: "Token imgUrl required.",
  },
  addr1: {
    type: String,
    trim: true,
    required: "Address is required.",
  },
  city: {
    type: String,
    trim: true,
    required: "City is required.",
  },
  state: {
    type: String,
    trim: true,
    required: "State is required.",
  },
  zip: {
    type: String,
    trim: true,
    required: "Zip is required.",
  },
  timesfound: {
    type: Number,
    default: 0,
  },
});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
