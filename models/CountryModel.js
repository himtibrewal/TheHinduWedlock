/**
 * Created by him on 09-Apr-17.
 */
var mongoose  =  require('mongoose');

var  Schema = mongoose.Schema;

var countrySchema  =  new Schema(
    {
        country_id:{type:Number,required:true},
        country:{type:String,required:true}
    }
);

module.exports = mongoose.model('Country',countrySchema);