/**
 * Created by him on 09-Apr-17.
 */

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var messageSchema = new Schema(
    {
        chat_id: {type: String},
        sender_id: {type: Number},
        reciver_id: {type: Number},
        is_sent: {type: Boolean},
        is_recieve: {type: Boolean},
        sender_delete: {type: Boolean},
        reciver_delete: {type: Boolean},
        time: {type: Date},
        message: {type: String}
    }
);

messageSchema.plugin(AutoIncrement, {inc_field: 'message_id'});
module.exports = mongoose.model('message', messageSchema);