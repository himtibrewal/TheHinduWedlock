/**
 * Created by him on 12-Jul-17.
 */

/**
 * Created by him on 09-Apr-17.
 */
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var citySchema = new Schema(
    {
        city_id: {type: Number, required: true},
        state_id: {type: Number, required: true},
        city: {type: String, required: true}
    }
);

module.exports = mongoose.model('City', citySchema);
