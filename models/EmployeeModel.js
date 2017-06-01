/**
 * Created by him on 09-Apr-17.
 */
var mongoose  =   require('mongoose');

var Schema  =  mongoose.Schema;

var employeeSchema  =  new  Schema(
    {
        employee_id:{type:Number,required:true},
        employee:{type:String,required:true}
    }
);

module.exports =  mongoose.model('Employee',employeeSchema);