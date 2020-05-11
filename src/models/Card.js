const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const setMongoMixedWithBadKeys = data =>
//     Array.isArray(data)
//         ? data.map(setMongoMixedWithBadKeys)
//         : typeof data === 'object'
//             ? Object.entries(data).reduce((a, [key, value]) => ({ ...a, [key.replace('.', '__').replace('$', '___')]: setMongoMixedWithBadKeys(value) }), {})
//             : data

// const getMongoMixedWithBadKeys = data =>
//     Array.isArray(data)
//         ? data.map(getMongoMixedWithBadKeys)
//         : typeof data === 'object'
//             ? Object.entries(data).reduce((a, [key, value]) => ({ ...a, [key.replace('__', '.').replace('___', '$')]: getMongoMixedWithBadKeys(value) }), {})
//             : data

// const Note = new Schema({
//     updateTime: {
//         type: String,
//         required: true
//     },
//     updateSource: {
//         type: String,
//         required: true
//     },
// })

const CardSchema = new Schema({
    cardID: {
        type: String,
        required: true,
        unique: true
    },
    cardName: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true,
        default: "台新銀行"
    },
    imageUrl: {
        type: String,
    },
    imageRotate: {
        type: Boolean,
    },
    imageLocal: {
        type: String,
    },
    offers: {
        type: [String],            // offerID
        required: true
    },
    note: {
        type: {
            updateTime: {
                type: String,
                required: true
            },
            updateSource: {
                type: String,
                required: true
            },
        }
    }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;