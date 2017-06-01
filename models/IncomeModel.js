/**
 * Created by him on 09-Apr-17.
 */

var  mongoose =  require('mongoose');

var Schema  = mongoose.Schema;

var incomeSchema  =  new  Schema(
    {
        income_id:{type:Number,required:true},
        income:{type:String,required:true}
    }
);

module.exports = mongoose.model('Income',incomeSchema);
