const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = new Schema({
    storeName: {
        type: String,
        required: true,
        unique: true
    },
    categories: {                    // Top hierarchy: 交通、食宿、國內一般消費  
        type: [String]
    },
    tags: {                          // second hierarchy: 航空、停車、旅遊、現金回饋
        type: [String]
    },
    imageLink: {
        type: String
    },
    websiteLink: {
        type: String
    },
    numSearch: {
        type: Number,
        default: 0
    }
});

const Store = mongoose.model('Store', StoreSchema);
module.exports = Store;