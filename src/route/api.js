const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Card = require('../models/Card');
const Offer = require('../models/Offer');
const Store = require('../models/Store');

// router.post('/users', (req, res) => {
//     const userdata = req.body;
//     if (userdata.lineID === "") {
//         res.json("[ERROR] lineID empty!");
//     } else {
//         User.findOne({ lineID: userdata.lineID }, (err, userResponse) => {
//             if (err) {
//                 console.log(err);
//                 res.json("Server User find ID Error." + String(err));
//             }
//             else if (!userResponse) {
//                 const newUser = new User(userdata);
//                 newUser.save().then((user) => {
//                     res.json("New user created!");
//                 })
//             } else {
//                 const newUser = {
//                     userResponse: this.state.userId,
//                     displayName: this.state.displayName,
//                     nickName: this.state.nickName,
//                     age: this.state.age,
//                     gender: this.state.gender,
//                     cards: userCards,
//                     stores: []
//                 };
//                 userResponse = userdata;
//                 userResponse.save().then((user) => {
//                     res.json("User Data modified!");
//                 })
//             }
//         })
//     }
// });

// router.get('/users', (req, res) => {
//     console.log('router get');
//     res.json();
// });

// router.post('/check-users', (req, res) => {
//     const userID = req.body.userID;
//     if (userID === "") {
//         res.json("[ERROR] lineID ERROR!");
//     } else {
//         User.findOne({ lineID: userID }, (err, userResponse) => {
//             if (err) {
//                 console.log(err);
//                 res.json("Server User find ID Error." + String(err));
//             }
//             // else if (!userResponse) {
//             //     res.json({ IDregistered: false });
//             // } else {
//             //     res.json({ IDregistered: true });
//             // }
//             else{
//                 res.json(userResponse);
//             }
//         })
//     }
// });

// router.get('/cards', (req, res) => {
//     Card.find({}, (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         else if (!data) {
//             console.log("[ERROR] EMPTY DATA!");
//         } else {
//             res.json(data);
//         }
//     })
// });

router.get('/get-offer-id/:id', (req, res) => {
    const offerID = req.params.id;
    // console.log(offerID);
    Offer.findOne({ offerID: offerID }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else if (!data) {
            console.log("[ERROR] <get-offer-id> DATA NOT FOUND!");
        }
        else {
            res.json(data);
        }
    })
});

router.get('/delete-offer-id/:id', (req, res) => {
    const offerID = req.params.id;
    // console.log(offerID);
    Offer.deleteOne({ offerID: offerID }, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(result);
        }
    })
});

// router.post('/get-offer-id', (req, res) => {
//     const offerID = req.body.offerID;
//     Offer.findOne({ offerID: offerID }, (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         else if (!data) {
//             console.log("[ERROR] <get-offer-id> DATA NOT FOUND!");
//         } else {
//             res.json(data);
//         }
//     })
// });

router.post('/save-one-offer', (req, res) => {
    const newdata = req.body;
    Offer.findOne({ offerID: newdata.offerID }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else if (!data) {
            console.log("[ERROR] <save-one-offer> DATA NOT FOUND!");
        } else {

            data.offerID = newdata.offerID;
            data.offerName = newdata.offerName;

            data.cardInfo[0].cardID = newdata.cardID;
            data.cardInfo[0].cardName = newdata.cardName;

            data.offerAbstract = newdata.offerAbstract;
            data.category = newdata.category;
            data.tags = newdata.tags;
            data.numSearch = newdata.numSearch;
            // expiration
            data.expiration.beginDate = newdata.beginDate;
            data.expiration.endDate = newdata.endDate;
            // reward
            data.reward.contents = newdata.contents;
            data.reward.limits = newdata.limits;
            data.reward.timingToOffer = newdata.timingToOffer;
            data.reward.notes.sentences = newdata.notes;
            // constraint
            data.constraint.userIdentity = newdata.userIdentity;
            data.constraint.timingOfConsumption = newdata.timingOfConsumption;
            data.constraint.numberOfConsumption = newdata.numberOfConsumption;
            data.constraint.type = newdata.type;
            data.constraint.channels = newdata.channels;
            data.constraint.amounts = newdata.amounts;
            data.constraint.others = newdata.others;

            data.save().then(() => {
                res.json("Offer Data modified!");
            }).catch(function (error) {
                console.log("[Error] " + error);
            })
        }
    })
});

router.post('/save-new-offer', (req, res) => {
    const newdata = req.body;
    Offer.findOne({ offerID: newdata.offerID }, (err, data) => {
        if (err) {
            console.log(err);
        }
        else if (data) {
            console.log("[ERROR] <save-new-offer> DATA ALREADY EXIST!");
        } else {
            // var newOfferData = {
            //     offerID: newdata.offerID,
            //     offerName: newdata.offerName,
            //     cardInfo: [{
            //         cardID: newdata.cardID,
            //         cardName: newdata.cardName,
            //     }],
            //     offerAbstract: newdata.offerAbstract,
            //     category: newdata.category,
            //     tags: newdata.tags,
            //     numSearch: newdata.numSearch,

            //     // expiration
            //     expiration: {
            //         beginDate: newdata.beginDate,
            //         endDate: newdata.endDate,
            //     },
            //     // reward
            //     reward: {
            //         contents: newdata.contents,
            //         limits: newdata.limits,
            //         timingToOffer: newdata.timingToOffer,
            //         notes: newdata.notes,
            //     },
            //     // constraint
            //     constraint: {
            //         userIdentity: newdata.userIdentity,
            //         timingOfConsumption: newdata.timingOfConsumption,
            //         numberOfConsumption: newdata.numberOfConsumption,
            //         type: newdata.type,
            //     },
            // }
            const newOffer = new Offer(newdata);
            // console.log(newOffer);
            newOffer.save().then(() => {
                res.json("New offer created!");
            }).catch(function (error) {
                console.log("[Error] " + error);
                res.json("[Error] " + error);

            })
        }
    })
});

router.get('/all-offer-list', (req, res) => {
    Offer.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        else if (!data) {
            console.log("[ERROR] all-reward-list EMPTY DATA!");
        } else {
            res.json(data);
        }
    })
});



// router.post('/saveinfos', (req, res) => {
//     const infodata = req.body;
//     Offer.findOne({ offerID: infodata.infoID }, (err, infoResponse) => {
//         if (err) {
//             console.log(err);
//             res.json("Server User find ID Error." + String(err));
//         }
//         if (infoResponse) {
//             // infoResponse.offerID = infodata.infoTitle;
//             infoResponse.offerName = infodata.infoTitle;
//             infoResponse.offerAbstract = infodata.infoSummary;
//             infoResponse.expiration.beginDate = infodata.startDate;
//             infoResponse.expiration.endDate = infodata.dueDate;
//             infoResponse.reward.contents = infodata.contents;

//             // console.log(infoResponse);
//             infoResponse.save().then((user) => {
//                 res.json("Data saved!");
//             })
//         } else {
//             res.json("INFO ID ERROR!");
//             console.log("INFO ID ERROR!");
//         }
//     })

// });

module.exports = router;