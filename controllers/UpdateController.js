var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var UserModel = require('../models/UserModel');


exports.imageupload = function (req, res, next) {
    var imageModel = new ImageModel({
        user_id: req.body.user_id,
        deleted: 0,
        showing: 1,
        profile: 0,
        image: encodeURIComponent(req.body.image)//; req.body.image + "&token=" + req.body.token
    });
    imageModel.save(function (err) {
        if (err) {
            return next(err);
        } else {
            ImageModel.find({user_id: req.body.user_id, deleted: 0}, function (err, result) {
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
            ImageModel.findOneAndUpdate({image_id: id}, {$set: data1}, {multi: true}, function (err1, doc1) {
                if (err1) {
                    res.json({"response_code": "202", "message": "Something went wrong"});
                } else if (doc1 == null) {
                    res.json({"response_code": "202", "message": "Something went wrong"});
                } else {
                    res.json({"response_code": "200", "message": "Profile Picture set Successfully"});
                }
            });
        }
    });
};

exports.delete_image = function (req, res, next) {
    var id = req.body.image_id;
    var data = {
        deleted: 1
    };
    ImageModel.findOneAndUpdate({image_id: id}, {$set: data}, {multi: true}, function (err1, doc1) {
        if (err1) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (doc1 == null) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else {
            res.json({"response_code": "200", "message": "Image Delete Successfully"});
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
