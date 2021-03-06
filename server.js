const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { dirname } = require("path");
const TokensController = require("./controllers/tokensController");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));


app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(TokensController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/scavenger-match", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully logged into DB");
  })
  .catch((err) => {
    console.log("Unable to connect to DB");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
