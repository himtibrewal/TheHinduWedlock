/**
 * Created by him on 09-Apr-17.
 */
var mongoose  =   require('mongoose');

var Schema  = mongoose.Schema;

var  physicalSchema  =  new Schema(
    {
        physical_id:{type:Number,required:true},
        physical:{type:String,required:true}
    }
);

module.exports = mongoose.model('Physical',physicalSchema);