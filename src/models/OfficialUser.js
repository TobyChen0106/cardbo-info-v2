const mongoose = require("mongoose");

const { Schema } = mongoose;

const OfficialUserSchema = new Schema({
  lineID: {
    type: String,
    required: true,
  },
  storeCd: {
    type: String,
  },
  registeredTime: {
    type: String,
    default: new Date().toString(),
  },
});

const OfficialUser = mongoose.model(
  "OfficialUser",
  OfficialUserSchema,
  "officialusers"
);
module.exports = OfficialUser;
