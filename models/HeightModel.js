/**
 * Created by him on 09-Apr-17.
 */
var mongoose  = require('mongoose');

var Schema  = mongoose.Schema;

var heightSchema  =   new Schema(
    {
        height_id:{type:Number,required:true},
        height:{type:String,required:true}
    }
);


module.exports =  mongoose.model('Height',heightSchema);