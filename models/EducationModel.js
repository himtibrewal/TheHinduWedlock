/**
 * Created by him on 09-Apr-17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var educationSchema = new Schema(
    {
        education_id: {type: Number, required: true},
        education_dep: {type: String, required: true},
        education: {type: String, required: true}
    }
);

module.exports = mongoose.model('Education', educationSchema);
