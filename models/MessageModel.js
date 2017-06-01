/**
 * Created by him on 09-Apr-17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = new  Schema(
    {
        sender_id : {type:Schema.ObjectId,ref:'user_detail'},
        reciver_id:{type:Schema.ObjectId,ref:'user_detail'},
        time:{type:Date},
        message:{type:String}
    }
);

module.exports = mongoose.model('message',messageSchema);