const express = require("express");
const router = express.Router();
const db = require("../models");

// Read All
router.get("/api/tokens", (req, res) => {
    db.Token.find({})
      .then((foundToken) => {
        res.json({
          error: false,
          data: foundToken,
          mesasge: "Successfully found all Tokens.",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to retrieve resource.",
        });
      });
  });



// Read One


// Create
router.post("/api/tokens", (req, res) => {
    db.Token.create(req.body)
    .then((createdToken) => {
        res.json({
            error: false,
            data: createdToken,
            message: "Successfully created Token."
        });
    })
    .catch((err) => {
        res.status(500).json({
            error: true,
            data: null,
            message: "Failed to create resource."
        });
    });

});


// Update


// Delete

module.exports = router;