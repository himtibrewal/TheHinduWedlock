/**
 * Created by him on 23-Jul-17.
 */
var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var blockSchema = new Schema(
    {
        user_id: {type: String},
        blockeduser_id: {type: String},
        time: {type: Date}
    }
);
blockSchema.plugin(AutoIncrement, {inc_field: 'blocked_id'});
module.exports = mongoose.model('blockuser', blockSchema);