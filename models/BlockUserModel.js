/**
 * Created by him on 23-Jul-17.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blockSchema = new Schema(
    {
        user_id: {type: String},
        blocked_id: {type: String},
        time: {type: Date}
    }
);

module.exports = mongoose.model('blockuser', blockSchema);