/**
 * Created by him on 04-Apr-17.
 */
var mongoose  =  require('mongoose');
var Schema =  mongoose.Schema;
var Testmodel  =  new Schema(
    {
        name:String,
       // F_name:String ,
        email:String,
        password:String
    }
)

module.exports = mongoose.model('Test',Testmodel);
