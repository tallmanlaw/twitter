const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweetSchema = new Schema({
    tweet: {
        type: String,
        required: "You must include a message"
    },
    username: {
        type: String,
        required: "You must include a username"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;
//add your Tweet model here