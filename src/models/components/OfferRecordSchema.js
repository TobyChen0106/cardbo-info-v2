const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OfferRecordSchema = new Schema({
    offerID: {
        type: String,
        unique: true
    },
    numSearch: {
        type: Number,
        default: 0
    }
})

// const Expiration = mongoose.model('Expiration', ExpirationSchema);
module.exports = OfferRecordSchema;