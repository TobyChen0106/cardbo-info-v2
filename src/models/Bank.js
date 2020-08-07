const mongoose = require("mongoose");

const { Schema } = mongoose;

const BankSchema = new Schema({
  BankName: String,
  BankImage: String,
  BankCode: String,
  BankWebsite: String,
  BankCards: [mongoose.ObjectId],
});

const Bank = mongoose.model("Bank", BankSchema, "Bank");
module.exports = Bank;
