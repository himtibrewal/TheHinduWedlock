/**
 * Created by him on 05-Apr-17.
 */
var mongoose =  require('mongoose');

var  Schema  =  mongoose.Schema;

var userSchema =  new Schema(
    {
        m_id:{type:String, required:true ,default:'ID1122'},
        //form basic  detail
        name:{type:String,max:50},
        gender:{type: String, required:true, enum: ['Male', 'Female','Other'], default: 'Other'},
        dob: {type: Date , required:true},
        marital_status: {type: String ,required:true},
        height: {type: String ,required:true},
        complexion: {type: String,required:true },
        body_type: {type: String,required:true},
        mother_tongue: {type: String , required: true},
        category: {type: String ,required:true},
        languages:  { type : Array , required:true,"default" : [] },
        about_me: {type: String ,required:true, max :500},

        //social  information
        education: {type: String ,required:true},
        employment: {type: String,required:true},
        income: {type: String,required:true},
        hobbies: {type: String,required:true},
        vegetarian: {type: String, required:true},
        drinking: {type: String,required:true},
        smoking: {type: String,required:true},

        //contact  information


        contact_person: {type: String ,required:true},
        contact_relation: {type: String ,required:true},
        current_address: {type: String,required:true},
        permanent_address: {type: String,required:true},
        country:{type:String, required:true, default:'India'},
        state: {type: String,required:true},
        city: {type: String,required:true},
        native_of: {type: String,required:true},
        phone_no: {type: String,required:true},
        mobile_no: {type: String,required:true},

        //family  detail  information
        father_name: {type: String,required:true},
        father_occupation: {type: String ,required:true},
        mother_name: {type: String,required:true},
        mother_occupation: {type: String,required:true},
        brothers_married: {type: String,required:true},
        brothers_unmarried: {type: String,required:true},
        sisters_married: {type: String,required:true},
        sisters_unmarried: {type: String,required:true},

        //Astro information
        time_of_birth: {type: String , required:true},
        place_of_birth: {type: String , required:true},
        gothram: {type: String},
        raasi: {type: String},
        //txtstar: {type: String},
        extra1: {type: String},
        extra2: {type: String},
        extra3: {type: String},

        //partner Preference

        pp_from_age: {type: String ,required:true ,default:'Any'},
        pp_to_age:{type: String ,required:true ,default:'Any'},
        pp_education:{type: String  ,required:true ,default:'Any'},
        pp_category:{type: String ,required:true ,default:'Any'},
        pp_complexion:{type: String ,required:true ,default:'Any'},
        pp_from_height:{type: String,required:true ,default:'Any'},
        pp_bodytype:{type: String,required:true ,default:'Any'},
        pp_any_information:{type: String},

        //account information

        email: {type: String,required:true},
        password: {type: String,required:true},
        furnished:{type: String},
        refer:{type: String},

        //for  internal use  ,
      //  logintime:{type:Schema.ObjectId,reg:'message'}







    //    native: {type: String,require:true}
        // passwordHash: {type: String},
        // subcategory: {type: String},
        // otherincome: {type: String},
        // ampm: {type: String}




    }
);

module.exports = mongoose.model('user_detail',userSchema);



