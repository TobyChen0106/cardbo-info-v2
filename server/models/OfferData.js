const mongoose = require("mongoose");

const { Schema } = mongoose;

const OfferDataSchema = new Schema({
  _id: String,
  OfferName: String,
  OfferCards: [mongoose.ObjectId],
  OfferPays: [mongoose.ObjectId],
  OfferPlaces: [String],
  OfferAbstract: String,
  Tags: [String],
  Note: String,
  Content: String,
  Category: String,
  Value: Number,
  ValuePercant: Number,
  BeginDate: String,
  EndDate: String,
});

const OfferData = mongoose.model("OfferData", OfferDataSchema, "OfferData");
module.exports = OfferData;
