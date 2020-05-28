const mongoose = require('mongoose')
const expirationSchema = require('./components/expirationSchema')
const rewardSchema = require('./components/rewardSchema')
const constraintSchema = require('./components/constraintSchema')
const Schema = mongoose.Schema

const OfferSchema = new Schema({
    // ID 由亂數產生
    offerID: {
        type: String,
        required: true,
        unique: true
    },
    // 優惠名稱
    offerName: {
        type: String,
        default: "offerName"
    },
    cardID: {                            // offer belongs to which card
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true,
        default: "cardName"
    },
    // 優惠截止時間
    expiration: {                       // Expiration of the offer
        type: expirationSchema,
        required: true
    },
    // 優惠概括描述
    offerAbstract: {
        type: String,
        default: "NAN",
        required: true
    },
    // 優惠類別（必須從以下幾個挑選，不可新增：國內一般消費、國外一般消費、交通、食宿、娛樂、保險、其他）
    category: {
        type: String,
        required: true
    },
    // 優惠子類別（可自行新增）
    tags: {                            // second hierarchy: 航空、停車、旅遊、現金回饋
        type: [String]
    },
    numSearch: {                        // the number of being searched by user
        type: Number,
        default: 0
    },
    // 優惠資訊
    reward: {
        type: rewardSchema,
    },
    // 優惠限制條件
    constraint: {                      // prerequsites to get an offer
        type: constraintSchema,
    }
});

const Offer = mongoose.model('Offer', OfferSchema);
module.exports = Offer;