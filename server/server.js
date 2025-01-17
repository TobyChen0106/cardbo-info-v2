const express = require("express");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoute = require("./routes/api");
// wake
// const wakeUpDyno = require("./src/route/wakeUpDyno.js");
// const DYNO_URL = "https://cardbo-info.herokuapp.com/";
// app.listen(port, () => {
//   wakeUpDyno(DYNO_URL); // will start once server starts
// })
// mongodb
// const dbName = "autopass-db"
// const usrName = "Toby0106"
// const usrPswd = "dbforcardbo"
// mongoURL = `mongodb+srv://${usrName}:${usrPswd}@cluster0-gfwld.mongodb.net/${dbName}?retryWrites=true&w=majority`

const dbName = "dbCardbo-v2";
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

app.use(bodyParser.json());
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../build")));
app.use("/api", apiRoute);

app.get("/ping", (req, res) => {
  return res.send("pong");
});

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../build", "index.html"));
// });

// wake
// const DYNO_URL = "https://cardbo-info.herokuapp.com/";
// const DYNO_URL2 = "https://cardbo-server.herokuapp.com/";
// const DYNO_URL3 = "https://tiemeup2020.herokuapp.com/";
// app.listen(port, () => {
//   wakeUpDyno(DYNO_URL); // will start once server starts
//   wakeUpDyno(DYNO_URL2); // will start once server starts
//   wakeUpDyno(DYNO_URL3); // will start once server starts
// })

app.listen(port, () => {
  console.log(`API server is app listening at http://localhost:${port}`);
});
