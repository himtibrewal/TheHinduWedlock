/**
 * Created by him on 09-Apr-17.
 */
var mongoose = require('mongoose');

var  Schema = mongoose.Schema;

var  languageSchema  =   new  Schema(
    {
        language_id:{type:Number, required:true},
        language:{type:String,required:true}
    }
);

module.exports =  mongoose.model('Language',languageSchema);