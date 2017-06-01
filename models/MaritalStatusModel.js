/**
 * Created by him on 09-Apr-17.
 */

var  mongoose  = require('mongoose');

var  Schema  = mongoose.Schema;


var maritalStatuSchema  =   new Schema(
    {
        marital_id:{type:Number,required:true},
        marital:{type:String,required:true}
    }
);

module.exports = mongoose.model('MaritalStatus',maritalStatuSchema);