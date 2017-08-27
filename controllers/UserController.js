/**
 * Created by him on 08-Apr-17.
 */

var mongoose = require('mongoose');
var express = require('express');
const format = require('util').format;
var router = express.Router();
var async = require('async')

//call  model
var UserModel = require('../models/UserModel');
var InterestModel = require('../models/InterestModel');
var ShortListModel = require('../models/ShortListModel');
var BlockUserModel = require('../models/BlockUserModel');
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

//call alla data
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
        marital_status: function (callback) {
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
//create new  user /registration
exports.create_new_user = function (req, res, next) {

    // //var ageTemp = req.body.dob.toSource().split("-")
    // var age = (Date.now() - req.body.dob);

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
            favourite_musics: req.body.favourite_musics,
            favourite_books: req.body.favourite_books,
            favourite_dress_style: req.body.favourite_dress_style,
            favourite_sports: req.body.favourite_sports,
            favourite_cuisines: req.body.favourite_cuisines,
            favourite_movies: req.body.favourite_movies,
            favourite_read: req.body.favourite_read,
            favourite_tv_shows: req.body.favourite_tv_shows,
            favourite_vaction_distination: req.body.favourite_vaction_distination,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            alternate_email_id: req.body.alternate_email_id,
            alternate_mobile_no: req.body.alternate_mobile_no,
            email_veriy: req.body.email_veriy,
            email_visible: req.body.email_visible,
            mobile_visible: req.body.mobile_visible,
            alt_mobile_visible: req.body.alt_mobile_visible,
            landline_visible: req.body.landline_visible,
            alt_email_verify: req.body.alt_email_verify,
            mobile_verify: req.body.mobile_verify,
            landline_no: req.body.landline_no,
            suitable_time_to_call_start_time: req.body.suitable_time_to_call_start_time,
            suitable_time_to_call_end_time: req.body.suitable_time_to_call_end_time,
            partner_from_age: req.body.partner_from_age,
            partner_to_age: req.body.partner_to_age,
            partner_from_height: req.body.partner_from_height,
            partner_to_height: req.body.partner_to_height,
            partner_counrtys: req.body.partner_counrtys,
            partner_marital_status: req.body.partner_marital_status,
            partner_religion: req.body.partner_religion,
            partner_caste: req.body.partner_caste,
            partner_tongue: req.body.partner_tongue,
            partner_manglik: req.body.partner_manglik,
            partner_diet: req.body.partner_diet,
            partner_smoke: req.body.partner_smoke,
            partner_drink: req.body.partner_drink,
            partner_complexion: req.body.partner_complexion,
            partner_bodytype: req.body.partner_bodytype,
            partner_challenge: req.body.partner_challenge,
            partner_about: req.body.partner_about,
            manage_strict_partner: req.body.manage_strict_partner,
            partner_give_outside: req.body.partner_give_outside
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
        res.json({'response_code': '200', 'status': 'success', 'userDetail': RegisterData});

    });
};
//user login
exports.user_login = function (req, res, next) {

    var useremail = req.body.email;
    var pass = req.body.password;
    UserModel.findOne({email: useremail, password: pass}, function (err, result) {
        if (err) {
            return next(err);
        } else if (result == null) {
            res.json({'data': result, "response_code": "202", "message": "Enter Valid credentials"});
        } else {
            var user_id = result.user_id;
            ImageModel.find({user_id: user_id, deleted: 0}, function (req, res11) {
                if (res == null) {
                    result.image = new Array();
                } else {
                    result._doc.image = res11;
                    res.json({'data': result, "response_code": "200", "message": "Login in Successfully !!"});
                }
            });
        }
    });
};
exports.imageupload = function (req, res, next) {
    var imageModel = new ImageModel({
        user_id: req.body.user_id,
        deleted: 0,
        showing: 1,
        isprofile: 0,
        image: encodeURIComponent(req.body.image)//; req.body.image + "&token=" + req.body.token
    });
    imageModel.save(function (err) {
        if (err) {
            return next(err);
        } else {
            ImageModel.find({user_id: req.body.user_id}, function (err, result) {
                if (err) {
                    return next(err);
                } else if (result == null) {
                    res.json({'data': result, "response_code": "202", "message": "No Image Found"});
                } else {
                    res.json({'data': result, "response_code": "200", "message": "Login in Successfully !!"});
                }
            });
        }
    });
};

exports.make_profile_picture = function (req, res, next) {
    var id = req.body.image_id;
    var user_id = req.body.user_id;
    var data = {
        profile: 0
    };
    var data1 = {
        profile: 1
    };
    ImageModel.update({user_id: user_id}, {$set: data}, {multi: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (doc == null) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else {
            ImageModel.update({image_id: id}, {$set: data1}, {multi: true}, function (err, doc) {
                if (err) {
                    res.json({"response_code": "202", "message": "Something went wrong"});
                } else if (doc == null) {
                    res.json({"response_code": "202", "message": "Something went wrong"});
                } else {
                    res.json({"response_code": "200", "message": "Profile Picture set Successfully"});
                }
            });
        }
    });
};
//create  new  interest
exports.create_new_instrest = function (req, res, next) {

    var interestData = new InterestModel(
        {
            senderid: req.body.user_id,
            reciverid: req.body.recieve_id,
            time: Date.now(),
            message: '',
            status: ''
        }
    );
    if (req.body.user_id == req.body.recieve_id) {
        res.json({'response_code': '202', 'status': 'failed', 'message': 'Can not interest to yourself'});
        return;
    } else {
        InterestModel.find({senderid: req.body.user_id}, function (err, result, next) {
            if (err) {
                return next(err);
            } else {
                var i;
                for (i = 0; i < result.length; i++) {
                    if (result[i].reciverid == req.body.recieve_id) {
                        res.json({'response_code': '203', 'status': 'failed', 'message': 'Already request sent'});
                        return;
                    }
                }
                interestData.save(function (err, results) {
                    if (err) {
                        return next(err);
                    }
                    res.json({'response_code': '200', 'status': 'success', 'interestData': results});
                });
            }
        });
    }


};
exports.getInterest_sent = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;

    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        occupation: true,
        income: true,
        highest_education: true
    };

    InterestModel.find({senderid: user_id}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var sentArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                sentArray.push(result[i].reciverid);
            }
            UserModel.find({user_id: sentArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            dob: data[i].dob,
                            height: data[i].height,
                            caste: data[i].caste,
                            sub_caste: data[i].sub_caste,
                            religion: data[i].religion,
                            mother_tongue: data[i].mother_tongue,
                            city: data[i].city,
                            state: data[i].state,
                            occupation: data[i].occupation,
                            income: data[i].income,
                            highest_education: data[i].highest_education
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': sentArray.length,
                        'results': resultdata
                    })
                }

            });
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.getInterest_received = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;
    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        occupation: true,
        income: true,
        highest_education: true
    };
    InterestModel.find({reciverid: user_id}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var recieveArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                recieveArray.push(result[i].senderid);
            }
            UserModel.find({user_id: recieveArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            dob: data[i].dob,
                            height: data[i].height,
                            caste: data[i].caste,
                            sub_caste: data[i].sub_caste,
                            religion: data[i].religion,
                            mother_tongue: data[i].mother_tongue,
                            city: data[i].city,
                            state: data[i].state,
                            occupation: data[i].occupation,
                            income: data[i].income,
                            highest_education: data[i].highest_education
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': recieveArray.length,
                        'results': resultdata
                    });
                }

            });
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.accept_reject_interest = function (req, res, next) {
    var id = req.body.interest_id;
    var data = {
        status: req.body.status,
        response_time: Date.now()
    };
    InterestModel.findOneAndUpdate({interest_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (data.status == "N") {
            res.json({"response_code": "200", "message": "Rejected Successfully"});
        } else {
            res.json({"response_code": "200", "message": "Accepted Successfully"});
        }
    });
};
exports.get_accepted_by_me = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;
    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        occupation: true,
        income: true,
        highest_education: true
    };
    InterestModel.find({reciverid: user_id, status: 'Y'}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var recieveArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                recieveArray.push(result[i].senderid);
            }
            UserModel.find({user_id: recieveArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            response_time: result[i].response_time,
                            dob: data[i].dob,
                            height: data[i].height,
                            caste: data[i].caste,
                            sub_caste: data[i].sub_caste,
                            religion: data[i].religion,
                            mother_tongue: data[i].mother_tongue,
                            city: data[i].city,
                            state: data[i].state,
                            occupation: data[i].occupation,
                            income: data[i].income,
                            highest_education: data[i].highest_education
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': recieveArray.length,
                        'results': resultdata
                    });
                }

            })//.skip(page * 10).limit(10).sort('_id')
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.get_accepted_me = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;

    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        occupation: true,
        income: true,
        highest_education: true
    };

    InterestModel.find({senderid: user_id, status: 'Y'}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var sentArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                sentArray.push(result[i].reciverid);
            }
            UserModel.find({user_id: sentArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            response_time: result[i].response_time,
                            dob: data[i].dob,
                            height: data[i].height,
                            caste: data[i].caste,
                            sub_caste: data[i].sub_caste,
                            religion: data[i].religion,
                            mother_tongue: data[i].mother_tongue,
                            city: data[i].city,
                            state: data[i].state,
                            occupation: data[i].occupation,
                            income: data[i].income,
                            highest_education: data[i].highest_education
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': sentArray.length,
                        'results': resultdata
                    });
                }

            })
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.get_i_declined = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;
    var userProjection = {
        user_id: true,
        name: true

    };
    InterestModel.find({reciverid: user_id, status: 'N'}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var recieveArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                recieveArray.push(result[i].senderid);
            }
            UserModel.find({user_id: recieveArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            response_time: result[i].response_time,
                            name: data[i].name
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': recieveArray.length,
                        'results': resultdata
                    });
                }

            })//.skip(page * 10).limit(10).sort('_id')
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.get_they_declined = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;

    var userProjection = {
        user_id: true,
        name: true
    };

    InterestModel.find({senderid: user_id, status: 'N'}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var sentArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                sentArray.push(result[i].reciverid);
            }
            UserModel.find({user_id: sentArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            interest_id: result[i].interest_id,
                            time: result[i].time,
                            response_time: result[i].response_time,
                            name: data[i].name
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': sentArray.length,
                        'results': resultdata
                    });
                }

            })
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.delete_interest = function (req, res) {
    var id = req.body.interest_id;
    InterestModel.findOneAndRemove({interest_id: id}, function (err, data) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else {
            res.json({"response_code": "200", "message": "delete Successfully"});
        }
    });
};
//create  new shortlist
exports.create_new_shortlist = function (req, res, next) {

    var shortlistData = new ShortListModel(
        {
            senderid: req.body.user_id,
            reciverid: req.body.recieve_id,
            time: Date.now(),
            message: '',
            status: ''
        }
    );

    shortlistData.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({'response_code': '200', 'status': 'success', 'shortlist': shortlistData});

    });
};
//create new  blocklist
exports.create_new_blocklist = function (req, res, next) {

    var blockuser = new BlockUserModel(
        {
            user_id: req.body.user_id,
            blockeduser_id: req.body.blockeduser_id,
            time: Date.now()
        }
    );

    blockuser.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({'response_code': '200', 'status': 'success', 'blockuser': blockuser});

    });
};
exports.getblocked_user = function (req, res, next) {
    var user_id = req.body.user_id;
    var page = req.body.page_no;

    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        occupation: true,
        income: true,
        highest_education: true
    };

    BlockUserModel.find({user_id: user_id}, function (err, result) {
        if (err) {
            return next(err);
        } else {
            var i;
            var sentArray = new Array();
            var resultdata = new Array();
            for (i = 0; i < result.length; i++) {
                sentArray.push(result[i].blockeduser_id);
            }
            UserModel.find({user_id: sentArray}, userProjection, function (err, data) {
                if (err) {
                    return err.message;
                } else {
                    for (i = 0; i < data.length; i++) {
                        var datavar = {
                            user_id: data[i].user_id,
                            blocked_id: result[i].blocked_id,
                            time: result[i].time,
                            dob: data[i].dob,
                            height: data[i].height,
                            caste: data[i].caste,
                            sub_caste: data[i].sub_caste,
                            religion: data[i].religion,
                            mother_tongue: data[i].mother_tongue,
                            city: data[i].city,
                            state: data[i].state,
                            occupation: data[i].occupation,
                            income: data[i].income,
                            highest_education: data[i].highest_education
                        };
                        resultdata.push(datavar)
                    }
                    res.json({
                        'response_code': '200',
                        'status': 'success',
                        'count': sentArray.length,
                        'results': resultdata
                    })
                }

            });
        }
    }).skip(page * 10).limit(10).sort('_id');
};
exports.delete_block = function (req, res) {
    var id = req.body.blocked_id;
    BlockUserModel.findOneAndRemove({blocked_id: id}, function (err, data) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (data == null) {
            res.json({"response_code": "202", "message": "Data Not found"});
        } else {
            res.json({"response_code": "200", "message": "delete Successfully"});
        }
    });
};

exports.get_contact = function (req, res) {
    var id = req.body.user_id;
    var userProjection = {
        user_id: true,
        phone: true,
        mobile: true,
        email: true,
        alternate_email_id: true,
        alternate_mobile_no: true,
        landline_no: true,
    };
    UserModel.find({user_id: id}, userProjection, function (err, data) {
        if (err) {
            return err.message;
        } else {
            res.json({
                'response_code': '200',
                'message': 'success',
                'results': data
            })
        }

    });
};
exports.get_user_detail = function (req, res) {
    var id = req.body.user_id;
    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        religion: true,
        mother_tongue: true,
        city: true,
        state: true,
        income: true,
        complexion: true,
        body_type: true,
        phone: true,
        mobile: true,
        email: true,
        //education  detail
        about_education: true,
        highest_education: true,
        pg_degree: true,
        pg_college: true,
        ug_degree: true,
        ug_college: true,
        other_pg_degree: true,
        other_ug_degree: true,
        school_name: true,
        //career  detail
        occupation: true,
        about_career: true,
        organization_name: true,
        setting_abord: true,
        work_after_marriage: true,
        alternate_email_id: true,
        alternate_mobile_no: true,
        landline_no: true
    };
    UserModel.findOne({user_id: id}, userProjection, function (err, data) {
        if (err) {
            return err.message;
        }
        if (data == null) {
            res.json({
                'response_code': '202',
                'message': 'User Id Not Found',
                'results': data
            });
        } else {
            res.json({
                'response_code': '200',
                'message': 'success',
                'results': data
            });
        }

    });
};
exports.user_list = function (req, res, next) {
    var page = parseInt(req.body.page_no);
    var seacrhArray = new Array();
    if (req.body.from_age != null && req.body.from_age != undefined) {
        seacrhArray.push('age:' + {$gt: req.body.from_age});
    }
    if (req.body.toage != null && req.body.to_age != undefined) {
        seacrhArray.age = {$lt: req.body.to_age};
    }
    if (req.body.from_height != null && req.body.from_height != undefined) {
        seacrhArray.height = {$gt: req.body.from_height};
    }
    if (req.body.to_height != null && req.body.to_height != undefined) {
        seacrhArray.height = {$lt: req.body.to_height};
    }
    if (req.body.photo_count != null && req.body.photo_count != undefined) {
        seacrhArray.photo_count = req.body.photo;
    }
    if (req.body.from_income != null && req.body.from_income != undefined) {
        seacrhArray.income = {$gt: req.body.from_income};
    }
    if (req.body.to_income != null && req.body.to_income != undefined) {
        seacrhArray.income = {$gt: req.body.to_income};
    }
    if (req.body.education != null && req.body.education != undefined) {
        seacrhArray.education = req.body.education;
    }
    if (req.body.country != null && req.body.country != undefined) {
        seacrhArray.country = req.body.country;
    }
    if (req.body.state != null && req.body.state != undefined) {

    }
    if (req.body.city != null && req.body.city != undefined) {
        seacrhArray.push('city:' + req.body.city);
    }
    if (req.body.religion != null && req.body.religion != undefined) {
        seacrhArray.religion = req.body.religion;
    }
    var userProjection = {
        user_id: true,
        dob: true,
        height: true,
        caste: true,
        sub_caste: true,
        mother_tongue: true,
        city: true,
        religion: true,
        state: true,
        occupation: true,
        income: true
    };
    async.parallel({
        user_count: function (callback) {
            UserModel.count({}, callback)
        },
        user_data: function (callback) {
            UserModel.find({$or: [{city: 'Amrawati'}, {city: 'Adoni'}, {state: 'Assam'}, {state: 'Arunachal Pradesh'}]}, userProjection).skip(page * 20).limit(20).sort('_id')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        //Successful, so render
        res.json({'response_code': '200', 'status': 'success', 'results': results});
    });

};
//update user detail
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
exports.updateuser_ethnicity = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        religion: req.body.religion,
        mother_tongue: req.body.mother_tongue,
        caste: req.body.caste,
        sub_caste: req.body.sub_caste,
        gotra: req.body.gotra,
        family_based_on: req.body.family_based_on
    };

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_appearance = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        complexion: req.body.complexion,
        body_type: req.body.body_type,
        weight: req.body.weight
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_spclcase = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        challenged: req.body.challenged,
        thalassemia: req.body.thalassemia,
        hiv: req.body.hiv
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_kundli = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        Horoscope_check: req.body.Horoscope_check,
        rashi: req.body.rashi,
        nakshatra: req.body.nakshatra,
        manglik: req.body.manglik

    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "Updated successfully"});
    });
};
exports.updateuser_about_edu = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        about_education: req.body.about_education
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_collegedetail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        highest_education: req.body.highest_education,
        pg_college: req.body.pg_college,
        pg_degree: req.body.pg_degree,
        ug_degree: req.body.ug_degree,
        ug_college: req.body.ug_college,
        school_name: req.body.school_name
    };

    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_basicdetail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        name: req.body.name,
        height: req.body.height,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        mother_tongue: req.body.mother_tongue,
        marital_status: req.body.marital_status,
        manage_by: req.body.manage_by,
        name_show: req.body.name_show

    };

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
exports.updateuser_about_career = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        about_career: req.body.about_career
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_career_detail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        occupation: req.body.occupation,
        income: req.body.income,
        organization_name: req.body.organization_name
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_future_plan = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        setting_abord: req.body.setting_abord,
        work_after_marriage: req.body.work_after_marriage
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_about_family = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        about_family: req.body.about_family
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_family_detail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        family_status: req.body.family_status,
        family_type: req.body.family_type,
        family_values: req.body.family_values,
        living_with_parents: req.body.living_with_parents

    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_parents_detail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        family_status: req.body.family_status,
        family_income: req.body.family_income,
        father_occupation: req.body.father_occupation,
        mother_occupation: req.body.mother_occupation

    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_siblings_detail = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        brother: req.body.brother,
        married_brother: req.body.married_brother,
        sister: req.body.sister,
        sister_married: req.body.sister_married
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_habits = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        diet: req.body.diet,
        smoke: req.body.smoke,
        drink: req.body.drink,
        pets: req.body.pets
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_assets = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        own_house: req.body.own_house,
        own_car: req.body.own_car
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_skill = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        language_speak: req.body.language_speak,
        food_cook_detail: req.body.food_cook_detail
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_hobbies = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        hobbies: req.body.hobbies

    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_interest = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        interest: req.body.interest

    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
exports.updateuser_favourite = function (req, res, next) {

    var id = req.body.user_id;
    var data = {
        favourite_musics: req.body.favourite_musics,
        favourite_books: req.body.favourite_books,
        favourite_dress_style: req.body.favourite_dress_style,
        favourite_sports: req.body.favourite_sports,
        favourite_cuisines: req.body.favourite_cuisines,
        favourite_movies: req.body.favourite_movies,
        favourite_read: req.body.favourite_read,
        favourite_tv_shows: req.body.favourite_tv_shows,
        favourite_vaction_distination: req.body.favourite_vaction_distination,
    };
    UserModel.findOneAndUpdate({user_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        }
        res.json({"response_code": "200", "message": "data added successfully"});
    });
};
