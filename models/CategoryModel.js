/**
 * Created by him on 09-Apr-17.
 */
var  mongooose  =  require('mongoose');
var Schema  = mongooose.Schema;

var categorySchema  =   new  Schema(
    {
        category_id:{type:Number,required:true},
        category:{type:String,required:true}
    }
);

module.exports = mongooose.model('Category',categorySchema);

