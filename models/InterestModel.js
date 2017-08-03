/**
 * Created by him on 09-Apr-17.
 */

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var interestSchema = new Schema(
    {
        senderid: {type: String},
        reciverid: {type: String},
        time: {type: Date},
        message: {type: String},
        status: {type: String}
    }
);

interestSchema.plugin(AutoIncrement, {inc_field: 'interest_id'});
module.exports = mongoose.model('interest', interestSchema);

