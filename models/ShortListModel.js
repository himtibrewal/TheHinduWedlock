/**
 * Created by him on 23-Jul-17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shortlistSchema = new Schema(
    {
        senderid: {type: String},
        reciverid: {type: String},
        time: {type: Date},
        message: {type: String},
        status: {type: String}
    }
);

module.exports = mongoose.model('shortlist', shortlistSchema);

