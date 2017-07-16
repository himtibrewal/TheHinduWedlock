/**
 * Created by him on 08-Apr-17.
 */

var UserModel = require('../models/UserModel');
var InterestModel = require('../models/InterestModel');
var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var multer = require('multer');

//call  modeel

var categoryModel = require('../models/CategoryModel');
var complexionModel = require('../models/ComplexionModel');
var Category = require('../models/CategoryModel');
var Complexion = require('../models/ComplexionModel');
var Country = require('../models/CountryModel');
var Education = require('../models/EducationModel');
var Employee = require('../models/EmployeeModel');
var Height = require('../models/HeightModel');
var Income = require('../models/IncomeModel');
var Language = require('../models/LanguageModel');
var MaritalStatus = require('../models/MaritalStatusModel')
var Physical = require('../models/PhysicalModel');
var State = require('../models/StateModel');
var City = require('../models/CityModel');
var ImageModel = require('../models/ImageModel');

var async = require('async')

exports.create_new_user = function (req, res, next) {
    var RegisterData = new UserModel(
        {

            m_id: req.body.m_id,
            createfor: req.body.createfor,
            photo: req.body.photo,
            photo_count: req.body.photo_count,
            from_image: req.body.from_image,
            manage_by: req.body.manage_by,
            name: req.body.name,
            name_show: req.body.name_show,
            gender: req.body.gender,
            dob: req.body.dob,
            height: req.body.height,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            mother_tongue: req.body.mother_tongue,
            religion: req.body.religion,
            religion_show: req.body.religion_show,
            caste: req.body.caste,
            sub_caste: req.body.sub_caste,
            family_based_on: req.body.family_based_on,
            gotra: req.body.gotra,
            complexion: req.body.complexion,
            body_type: req.body.body_type,
            weight: req.body.weight,
            challenged: req.body.challenged,
            thalassemia: req.body.thalassemia,
            hiv: req.body.hiv,
            about_your_self: req.body.about_your_self,
            marital_status: req.body.marital_status,
            have_child: req.body.have_child,
            openforAllcaste: req.body.openforAllcaste,
            Horoscope_check: req.body.Horoscope_check,
            rashi: req.body.rashi,
            nakshatra: req.body.nakshatra,
            manglik: req.body.manglik,
            about_education: req.body.about_education,
            highest_education: req.body.highest_education,
            pg_degree: req.body.pg_degree,
            pg_college: req.body.pg_college,
            ug_degree: req.body.ug_degree,
            ug_college: req.body.ug_college,
            other_pg_degree: req.body.other_pg_degree,
            other_ug_degree: req.body.other_ug_degree,
            school_name: req.body.school_name,
            occupation: req.body.occupation,
            income: req.body.income,
            //   income_to:req.body.income_to,
            about_career: req.body.about_career,
            organization_name: req.body.organization_name,
            setting_abord: req.body.setting_abord,
            work_after_marriage: req.body.work_after_marriage,
            family_status: req.body.family_status,
            family_type: req.body.family_type,
            family_values: req.body.family_values,
            family_income: req.body.family_income,
            father_occupation: req.body.father_occupation,
            mother_occupation: req.body.mother_occupation,
            brother: req.body.brother,
            married_brother: req.body.married_brother,
            sister: req.body.sister,
            sister_married: req.body.sister_married,
            about_family: req.body.about_family,
            living_with_parents: req.body.living_with_parents,
            diet: req.body.diet,
            smoke: req.body.smoke,
            drink: req.body.drink,
            pets: req.body.pets,
            own_house: req.body.own_house,
            own_car: req.body.own_car,
            language_speak: req.body.language_speak,
            food_cook_detail: req.body.food_cook_detail,
            hobbies: req.body.hobbies,
            interest: req.body.interest,
            favourite_musics: req.body.favourite_musics
            , favourite_books: req.body.favourite_books
            , favourite_dress_style: req.body.favourite_dress_style
            , favourite_sports: req.body.favourite_sports
            , favourite_cuisines: req.body.favourite_cuisines
            , favourite_movies: req.body.favourite_movies
            , favourite_read: req.body.favourite_read
            , favourite_tv_shows: req.body.favourite_tv_shows
            , favourite_vaction_distination: req.body.favourite_vaction_distination
            , email: req.body.email
            , password: req.body.password
            , phone: req.body.phone
            , alternate_email_id: req.body.alternate_email_id
            , alternate_mobile_no: req.body.alternate_mobile_no
            , email_veriy: req.body.email_veriy
            , email_visible: req.body.email_visible
            , mobile_visible: req.body.mobile_visible
            , alt_mobile_visible: req.body.alt_mobile_visible
            , landline_visible: req.body.landline_visible
            , alt_email_verify: req.body.alt_email_verify
            , mobile_verify: req.body.mobile_verify
            , landline_no: req.body.landline_no
            , suitable_time_to_call_start_time: req.body.suitable_time_to_call_start_time
            , suitable_time_to_call_end_time: req.body.suitable_time_to_call_end_time
            , partner_from_age: req.body.partner_from_age
            , partner_to_age: req.body.partner_to_age
            , partner_from_height: req.body.partner_from_height
            , partner_to_height: req.body.partner_to_height
            , partner_counrtys: req.body.partner_counrtys
            , partner_marital_status: req.body.partner_marital_status
            , partner_religion: req.body.partner_religion
            , partner_caste: req.body.partner_caste
            , partner_tongue: req.body.partner_tongue
            , partner_manglik: req.body.partner_manglik
            , partner_diet: req.body.partner_diet
            , partner_smoke: req.body.partner_smoke
            , partner_drink: req.body.partner_drink
            , partner_complexion: req.body.partner_complexion
            , partner_bodytype: req.body.partner_bodytype
            , partner_challenge: req.body.partner_challenge
            , partner_about: req.body.partner_about
            , manage_strict_partner: req.body.manage_strict_partner
            , partner_give_outside: req.body.partner_give_outside

        }
    );

    RegisterData.save(function (err) {
        if (err) {
            if (err.code === 11000) {
                res.json({'response_code': '202', 'status': 'fail', 'message': 'Email id Already Register'});
            } else {
                return next(err);
            }
        }
        //successful - redirect to new author record.
        res.json({'response_code': '200', 'status': 'success', 'userDetail': RegisterData});

    });
};


exports.imageupload = function (req, res, next) {

    var id = req.body.user_id;
    var token = req.body.token;
    var key = 'kkkk' + 1;
    var data = {
        image1: req.body.image1 + "&token=" + token,
        // image2: req.body.image2 + "&token=" + token,
        // image3: req.body.image3 + "&token=" + token,
        // image4: req.body.image4 + "&token=" + token,
        // image5: req.body.image5 + "&token=" + token,
        // image6: req.body.image6 + "&token=" + token,
        // image7: req.body.image7 + "&token=" + token,
        // image8: req.body.image8 + "&token=" + token,
        // image9: req.body.image9 + "&token=" + token,
        // image10: req.body.image10 + "&token=" + token,
        // image11: req.body.image11 + "&token=" + token

    };

    ImageModel.findOneAndUpdate({user_id: id}, {$set: data}, {upsert: true, new: true}, function (err, doc) {
        if (err) {

        } else {
            res.json({"response_code": "200", "message": "data added successfully"});
        }

    });
};


exports.updateuser_about_your = function (req, res, next) {

    var id = req.body.user_id;
    var data = {about_your_self: req.body.about_your_self};

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};


exports.updateuser_about_family = function (req, res, next) {

    var id = req.body.user_id;
    var data = {about_family: req.body.about_family};

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};


exports.updateuser_mobile_verify = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        mobile_verify: req.body.mobile_verify,
        user_uid: req.body.user_uid
    };

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};

//for update  family  detail
exports.updatereg_family_detail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        family_status: req.body.family_status,
        family_type: req.body.family_type,
        family_values: req.body.family_values,
        family_income: req.body.family_income,
        father_occupation: req.body.father_occupation,
        mother_occupation: req.body.mother_occupation,
        brother: req.body.brother,
        married_brother: req.body.married_brother,
        sister: req.body.sister,
        sister_married: req.body.sister_married,
        family_based_on: req.body.family_based_on,
        gotra: req.body.gotra

    };

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};


//userLogin  from  app
exports.user_login = function (req, res, next) {

    var useremail = req.body.email;
    var pass = req.body.password;
    UserModel.findOne({email: useremail, password: pass}, function (err, result) {
        if (err) {
            return next(err);
        } else if (result == null) {
            res.json({'data': result, "response_code": "202", "message": "Enter Valid credentials"});
        } else {
            res.json({'data': result, "response_code": "200", "message": "Login in Successfully !!"});
        }

    });

};


exports.user_list = function (req, res, next) {
    var page = parseInt(req.params.page_no);
    //console.log('--'+page);
    async.parallel({
        user_count: function (callback) {
            UserModel.count(callback)
        },
        user_data: function (callback) {
            UserModel.find({}).skip(page * 20).limit(20).sort('_id')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        //Successful, so render
        res.json(results);
    });

};

exports.sent_interest = function (req, res, next) {
    var InterestData = new InterestModel(
        {
            senderid: req.body.sender_id,
            reciverid: req.body.reciver_id,
            time: Date.now(),
            message: 'Testing message',
            status: 'P'
        }
    )

    InterestData.save(function (err) {
        if (err) {
            return next(err);
        }
        //successful - redirect to new author record.
        res.json({'response_code': '200', 'status': 'success', 'userDetail': InterestData});

    });

};

exports.uploadimage = function (req, res, next) {
    console.log(req.files);
    //  res.send(req.files);
    res.json({'message': 'inserted'});
};


exports.alldata = function (req, res, next) {

    async.parallel({
        category: function (callback) {
            Category.find({}, 'category_id category -_id').sort('category_id')
                .exec(callback)
        },
        employee: function (callback) {
            Employee.find({}, 'employee_id employee -_id').sort('employee_id')
                .exec(callback)
        },
        complexion: function (callback) {
            Complexion.find({}).sort('_id')
                .exec(callback)
        },
        country: function (callback) {
            Country.find({}).sort('_id')
                .exec(callback)
        },
        education: function (callback) {
            Education.find({}).sort('_id')
                .exec(callback)
        },
        height: function (callback) {
            Height.find({}).sort('_id')
                .exec(callback)
        },
        income: function (callback) {
            Income.find({}).sort('_id')
                .exec(callback)
        },
        language: function (callback) {
            Language.find({}).sort('_id')
                .exec(callback)
        },
        maritial_status: function (callback) {
            MaritalStatus.find({}).sort('_id')
                .exec(callback)
        },
        physical: function (callback) {
            Physical.find({}).sort('_id')
                .exec(callback)
        },
        state: function (callback) {
            State.find({}).sort('_id')
                .exec(callback)
        },
        city: function (callback) {
            City.find({}).sort('_id')
                .exec(callback)
        }

    }, function (error, result) {
        res.json({"data": result, "response_code": "200", "message": "Data fetch Successfully"});
    });
};


// exports.index = function (req, res) {
//
//     async.parallel({
//         book_count: function (callback) {
//             UserModel.count(callback)
//         },
//         book_instance_count: function (callback) {
//             BookInstance.count(callback)
//         },
//         book_instance_available_count: function (callback) {
//             BookInstance.count({status: 'Available'}, callback)
//         },
//         author_count: function (callback) {
//             Author.count(callback)
//         },
//         genre_count: function (callback) {
//             Genre.count(callback)
//         },
//     }, function (err, results) {
//         //   res.render('index', { title: 'Local Library Home', error: err, data: results });
//         res.json(results);
//     });
// };


















