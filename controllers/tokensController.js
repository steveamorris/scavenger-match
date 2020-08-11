const express = require("express");
const router = express.Router();
const db = require("../models");

// Read All

router.get("/api/tokens", (req, res) => {
    db.Token.find({})
    .then((response) => {
        console.log(response.data)
    })
})


// Read One


// Create


// Update


// Delete
