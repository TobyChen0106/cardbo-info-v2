const mongoose = require('mongoose')
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
        type: {
            beginDate: {
                type: String,
                default: "From now on",
                required: true
            },
            endDate: {
                type: String,
                default: "End of the year",
                required: true
            }
        },
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
        type: {
            // 優惠內容
            contents: {                // details of an offer written in markdown
                type: String,
                default: "",
            },
            // 優惠使用限制
            limits: {                  // limitation on the usage of an offer        
                type: [String],
                default: "Unlimited"
            },
            // 何時可以使用優惠
            timingToOffer: {           // when an offer can be used
                type: String,
                default: ""
            },
            // 何地可以使用優惠
            places: {                  // where an offer can be used
                type: [String]
            },
            // 其他備註
            notes: {
                type: String,
                default: ""
            }
        }
    },
    // 優惠限制條件
    constraint: {                      // prerequsites to get an offer
        type: {
            // 持卡人身份
            userIdentity: {
                type: String,
                default: ""
            },
            // 必須在何時有消費
            timingOfConsumption: {     // when does the transaction take place
                type: String,
                default: ""
            },
            // 必須在何地有消費
            channels: {                // where does the transaction take place
                type: [String]
            },
            // 必須消費多少金額
            amounts: {                 // amount of the expense on the transaction
                type: [String]
            },
            // 必須消費幾次
            numberOfConsumption: {     // number of transactions
                type: Number,
                default: 0
            },
            // 必須以何種消費類型
            type: {                    // may be deprecated and replaced by categories
                type: String,
                default: ""
            },
            // 其他限制條件
            others: {
                type: [String]
            }
        }
    }
});

const Offer = mongoose.model('Offer', OfferSchema);
module.exports = Offer;