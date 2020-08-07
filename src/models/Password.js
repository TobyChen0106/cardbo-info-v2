const mongoose = require("mongoose");

const { Schema } = mongoose;

const PasswordSchema = new Schema({
  storeNm: {
    type: String,
    required: true,
  },
  storeCd: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Password = mongoose.model("Password", PasswordSchema, "passwords");
module.exports = Password;
