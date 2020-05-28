const mongoose = require('mongoose')
const StoreRecordSchema = require('./components/rewardSchema');
const OfferRecordSchema = require('./components/expirationSchema');
const Schema = mongoose.Schema


const UserSchema = new Schema({
    lineID: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
    },
    nickName: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cards:{
        type: [String],                // Store CardID
        default: undefined,
    },
    favoriteStores:{
        type: [StoreRecordSchema],     // Stores haved been queried
        default: [],
    },
    favoriteOffers:{
        type: [OfferRecordSchema],     // Offers haved been used 
        default: [],
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;