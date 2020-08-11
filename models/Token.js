const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Token name required.",
        unique: true
    },
    imgUrl: {
        type: String,
        trim: true,
        required: "Token imgUrl required.",
        unique: true
    },
    // location: {
//     type: "Point",
//     coordinates: []
// },
addr1: {
    type: String,
    trim: true,
    required: "Address is required."
},
city: {
    type: String,
    trim: true,
    required: "City is required."
},
state: {
    type: String,
    trim: true,
    required: "State is required."
},
zip: {
    type: String,
    trim: true,
    required: "Zip is required."
},
timesfound: {
    type: Number,
    trim: true,
    default: 0
}

});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;