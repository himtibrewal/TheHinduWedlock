/**
 * Created by him on 16-Jul-17.
 */

/**
 * Created by him on 09-Apr-17.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = new Schema(
    {
        user_id: {type: String},
        image: {type: String}
    }
);

module.exports = mongoose.model('Image', imageSchema);