const mongoose = require("mongoose");
const User = require("../src/models/User");
const Card = require("../src/models/Card");
const Offer = require("../src/models/Offer");
const Store = require("../src/models/Store");

const dbName = "dbCardbo";
const usrName = "cardbo";
const usrPswd = "69541";
const mongoURL = `mongodb+srv://${usrName}:${usrPswd}@cardbo-br3ga.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (e) => {
  console.log(e);
});
db.once("open", () => {
  console.log("MongoDB connected!");
});

Offer.find({}, (err, data) => {
  if (err) {
    console.log(err);
  } else if (!data) {
    console.log("[ERROR] EMPTY DATA!");
  } else {
    let i;
    for (i = 0; i < data.length; ++i) {
      console.log(data[i]);
    }
    console.log(i);
  }
});
