const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OfferDataDigitalSchema = new Schema({
  OfferName: String,
  OfferCards: [mongoose.ObjectId],
  OfferPays: [mongoose.ObjectId],
  OfferPlaces: [String],
  Tags: [String],
  Note: String,
  Content: String,
  Category: String,
  Value: Number,
  ValuePercant: Number,
  BeginDate: String,
  EndDate: String,
  TripleType: [String], // Only in OfferData-Digital, OfferData-Analog
});

const OfferDataDigital = mongoose.model(
  "OfferDataDigital",
  OfferDataDigitalSchema,
  "OfferData-Digital"
);
module.exports = OfferDataDigital;
