/**
 * Created by him on 05-Apr-17.
 */
var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');

var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        id: {type: Number},
        createfor: {type: String},

        //photo _detail
        photo: {type: String},
        photo_count: {type: String},
        from_image: {type: String},
        manage_by: {type: String},

        //basic  info //
        name: {type: String},
        name_show: {type: String},
        gender: {type: String, enum: ['Male', 'Female', 'Other'], default: 'Other'},
        dob: {type: String},
        height: {type: String},
        country: {type: String, default: 'India'},
        state: {type: String},
        city: {type: String},
        mother_tongue: {type: String},
        religion: {type: String},
        religion_show: {type: String},
        caste: {type: String},
        sub_caste: {type: String},
        family_based_on: {type: String},
        gotra: {type: String},
        complexion: {type: String},
        body_type: {type: String},
        weight: {type: String},
        challenged: {type: String},
        thalassemia: {type: String},
        hiv: {type: String},
        about_your_self: {type: String},
        marital_status: {type: String},
        have_child: {type: String},

        openforAllcaste: {type: String},
        //kundli
        Horoscope_check: {type: String},
        rashi: {type: String},
        nakshatra: {type: String},
        manglik: {type: String},

        //education detail
        about_education: {type: String},
        highest_education: {type: String},
        pg_degree: {type: String},
        pg_college: {type: String},
        ug_degree: {type: String},
        ug_college: {type: String},
        other_pg_degree: {type: String},
        other_ug_degree: {type: String},
        school_name: {type: String},

        //career  detail
        occupation: {type: String},
        income: {type: String},
        // income_to:{type:String},
        about_career: {type: String},
        organization_name: {type: String},
        setting_abord: {type: String},
        work_after_marriage: {type: String},


        //family detail
        family_status: {type: String},
        family_type: {type: String},
        family_values: {type: String},
        family_income: {type: String},
        father_occupation: {type: String},
        mother_occupation: {type: String},
        brother: {type: String},
        married_brother: {type: String},
        sister: {type: String},
        sister_married: {type: String},
        about_family: {type: String},
        living_with_parents: {type: String},

        //life  style
        //habbits
        diet: {type: String},
        smoke: {type: String},
        drink: {type: String},
        pets: {type: String},

        //assest
        own_house: {type: String},
        own_car: {type: String},


        language_speak: {type: String},
        food_cook_detail: {type: String},

        //hobbies
        hobbies: {type: String},
        interest: {type: String},

        favourite_musics: {type: String},
        favourite_books: {type: String},
        favourite_dress_style: {type: String},
        favourite_sports: {type: String},
        favourite_cuisines: {type: String},
        favourite_movies: {type: String},
        favourite_read: {type: String},
        favourite_tv_shows: {type: String},
        favourite_vaction_distination: {type: String},


        //login information
        email: {type: String, unique: true},
        password: {type: String},
        phone: {type: String},
        alternate_email_id: {type: String},
        alternate_mobile_no: {type: String},
        email_veriy: {type: String},
        email_visible: {type: String},
        mobile_visible: {type: String},
        alt_mobile_visible: {type: String},
        landline_visible: {type: String},
        alt_email_verify: {type: String},
        mobile_verify: {type: String},
        landline_no: {type: String},
        suitable_time_to_call_start_time: {type: String},
        suitable_time_to_call_end_time: {type: String},

        //partner detail
        partner_from_age: {type: String},
        partner_to_age: {type: String},
        partner_from_height: {type: String},
        partner_to_height: {type: String},
        partner_counrtys: {type: String},
        partner_marital_status: {type: String},
        partner_religion: {type: String},
        partner_caste: {type: String},
        partner_tongue: {type: String},
        partner_manglik: {type: String},
        partner_diet: {type: String},
        partner_smoke: {type: String},
        partner_drink: {type: String},
        partner_complexion: {type: String},
        partner_bodytype: {type: String},
        partner_challenge: {type: String},
        partner_about: {type: String},
        manage_strict_partner: {type: String},
        partner_give_outside: {type: String}


    }
);
userSchema.plugin(AutoIncrement, {inc_field: 'user_id'});
module.exports = mongoose.model('user_detail', userSchema);



