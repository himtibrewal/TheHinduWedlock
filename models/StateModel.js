/**
 * Created by him on 09-Apr-17.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var stateSchema = new Schema(
    {
        state_id: {type: Number, required: true},
        country_id: {type: Number, required: true},
        state: {type: String, required: true}
    }
);
module.exports = mongoose.model('State', stateSchema);