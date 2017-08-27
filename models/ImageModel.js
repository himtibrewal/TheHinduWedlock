/**
 * Created by him on 16-Jul-17.
 */

/**
 * Created by him on 09-Apr-17.
 */
var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var imageSchema = new Schema(
    {
        user_id: {type: String},
        image: {type: String},
        deleted: {type: String},
        showing: {type: String},
        profile: {}
    }
);

imageSchema.plugin(AutoIncrement, {inc_field: 'image_id'});
module.exports = mongoose.model('Image', imageSchema);