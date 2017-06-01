/**
 * Created by him on 09-Apr-17.
 */

var mongoose  = require('mongoose');

var Schema  =  mongoose.Schema;

var  complexionSchema  =  new  Schema(
    {
        complexion_id:{type:Number,required:true},
        complexion:{type:String,required:true}
    }
);

module.exports = mongoose.model('Complexion',complexionSchema);