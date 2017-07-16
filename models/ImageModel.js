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
        image1: {type: String},
        image2: {type: String},
        image3: {type: String},
        image4: {type: String},
        image5: {type: String},
        image6: {type: String},
        image7: {type: String},
        image8: {type: String},
        image9: {type: String},
        image10: {type: String},
        image11: {type: String},
        image12: {type: String},
        image13: {type: String},
        image14: {type: String},
        image15: {type: String},
        image16: {type: String},
        image17: {type: String},
        image18: {type: String},
        image19: {type: String},
        image20: {type: String}
    }
);

module.exports = mongoose.model('Image', imageSchema);