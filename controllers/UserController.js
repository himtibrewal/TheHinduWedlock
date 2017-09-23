/**
 * Created by him on 08-Apr-17.
 */

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var async = require('async');
var admin = require("firebase-admin");

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
var MaritalStatus = require('../models/MaritalStatusModel');
var Physical = require('../models/PhysicalModel');
var State = require('../models/StateModel');
var City = require('../models/CityModel');
var ImageModel = require('../models/ImageModel');

var serviceAccount = require("../thehindu-24e87-firebase-adminsdk-3f6yv-b5b77363f4.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://thehindu-24e87.firebaseio.com"
});


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
    var dates = req.body.dob.split("-")

    var RegisterData = new UserModel(
        {
            createfor: req.body.createfor,
            manage_by: req.body.manage_by,
            gender: req.body.gender,
            dob: req.body.dob,
            year: parseInt(dates[2]),
            month: parseInt(dates[1]),
            date: parseInt(dates[0]),
            height: req.body.height,
            height_id: req.body.height_id,
            country: req.body.country,
            country_id: req.body.country_id,
            state: req.body.state,
            state_id: req.body.state_id,
            city: req.body.city,
            city_id: req.body.city_id,
            // about_education: req.body.about_education,
            highest_education: req.body.highest_education,
            highest_edu_id: req.body.highest_edu_id,
            pg_degree: req.body.pg_degree,
            pg_college: req.body.pg_college,
            ug_degree: req.body.ug_degree,
            ug_college: req.body.ug_college,
            other_pg_degree: req.body.other_pg_degree,
            other_ug_degree: req.body.other_ug_degree,
            school_name: req.body.school_name,
            occupation: req.body.occupation,
            occupation_id: req.body.occupation_id,
            income: req.body.income,
            income_id: req.body.income_id,

            marital_status_id: req.body.marital_status_id,
            marital_status: req.body.marital_status,
            have_child: req.body.have_child,
            mother_tongue: req.body.mother_tongue,
            mother_tongue_id: req.body.mother_tongue_id,
            religion: req.body.religion,
            religion_id: req.body.religion_id,
            religion_show: req.body.religion_show,
            caste: req.body.caste,
            caste_id: req.body.caste_id,
            sub_caste: req.body.sub_caste,
            sub_caste_id: req.body.sub_caste_id,
            manglik: req.body.manglik,
            manglik_id: req.body.manglik_id,
            openforAllcaste: req.body.openforAllcaste,
            Horoscope_check: req.body.Horoscope_check,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            device_type: req.body.device_type,
            reg_key: req.body.reg_key,
            registration_date: Date.now(),
            device_id: req.body.device_id
        }
    );
    var payload = {
        notification: {
            title: "The Hindu Wedlock",
            body: "You are Registered Successfully"
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };
    //

    RegisterData.save(function (err) {
        if (err) {
            if (err.code === 11000) {
                res.json({'response_code': '202', 'status': 'fail', 'message': 'Email id Already Register'});
            } else {
                return next(err);
            }
        } else {
            var registrationToken = req.body.reg_key;// "c8EL0a_sEn8:APA91bEgAtYHGCUImYjDspmigI3MclpAzALPzNPCCWvgq7lYWm3sgRMjQP7HLgL-RcL_0NvZt1liLo7SRNlf8BG7xdaJWpQ7aJF5sq8k-x2ganHxbVquYRgBPaNz27AgxBhUz-8on7Mk";
            admin.messaging().sendToDevice(registrationToken, payload)
                .then(function (response) {
                    // See the MessagingDevicesResponse reference documentation for
                    // the contents of response.
                    console.log("Successfully sent message:", response);
                })
                .catch(function (error) {
                    console.log("Error sending message:", error);
                });
            res.json({'response_code': '200', 'status': 'success', 'userDetail': RegisterData});
        }
    });
};
//user login
exports.user_login = function (req, res, next) {

    var useremail = req.body.email;
    var pass = req.body.password;
    var data = {
        reg_key: req.body.reg_key,
        device_id: req.body.device_id
    };

    var payload = {
        notification: {
            title: "The Hindu Wedlock",
            body: "You are LoginIn Successfully"
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };
    UserModel.findOne({email: useremail, password: pass}, function (err, result) {
        if (err) {
            return next(err);
        } else if (result == null) {
            res.json({'data': result, "response_code": "202", "message": "Enter Valid credentials"});
        } else {
            var user_id = result.user_id;
            UserModel.findOneAndUpdate({user_id: user_id}, {$set: data}, {new: true}, function (err1, doc1) {
                console.log("Successfully sent message:", doc1);
            });
            admin.messaging().sendToDevice(req.body.reg_key, payload)
                .then(function (response) {
                    // See the MessagingDevicesResponse reference documentation for
                    // the contents of response.
                    console.log("Successfully sent message:", response);
                })
                .catch(function (error) {
                    console.log("Error sending message:", error);
                });
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
//last_online
exports.last_online = function (req, res, next) {
    var id = req.body.user_id;
    var last_online = {
        last_online: Date.now()
    };

    UserModel.findOneAndUpdate({user_id: id}, {$set: last_online}, {new: true}, function (err1, doc1) {
        if (err1) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (doc1 == null) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else {
            res.json({"response_code": "200", "message": "update status successfully"});
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

    var payload = {
        notification: {
            title: "The Hindu Wedlock",
            body: "You Got New Interest."
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };

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
                    if (err != null) {
                        return next(err);
                    } else {
                        UserModel.findOne({user_id: req.body.recieve_id}, {reg_key: true}, function (err, result) {
                            if (err != null) {

                            } else {
                                var registrationToken = result._doc.reg_key;
                                admin.messaging().sendToDevice(registrationToken, payload)
                                    .then(function (response) {
                                        // See the MessagingDevicesResponse reference documentation for
                                        // the contents of response.
                                        console.log("Successfully sent message:", response);
                                    })
                                    .catch(function (error) {
                                        console.log("Error sending message:", error);
                                    });
                            }
                        });
                        res.json({'response_code': '200', 'status': 'success', 'interestData': results});
                    }

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

    InterestModel.find({$and: [{senderid: user_id}, {status: ''}]}, function (err, result) {
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
    InterestModel.find({$and: [{reciverid: user_id}, {status: ''}]}, function (err, result) {
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

    var payload1 = {
        notification: {
            title: "The Hindu Wedlock",
            body: "Your Interest is Accepted"
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };


    var payload2 = {
        notification: {
            title: "The Hindu Wedlock",
            body: "YYour Interest is Rejected"
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };

    InterestModel.findOneAndUpdate({interest_id: id}, {$set: data}, {new: true}, function (err, doc) {
        if (err) {
            res.json({"response_code": "202", "message": "Something went wrong"});
        } else if (data.status == "N") {
            UserModel.findOne({user_id: doc._doc.reciverid}, {reg_key: true}, function (err, result) {
                if (err != null) {

                } else {
                    var registrationToken = result._doc.reg_key;
                    admin.messaging().sendToDevice(registrationToken, payload1)
                        .then(function (response) {
                            // See the MessagingDevicesResponse reference documentation for
                            // the contents of response.
                            console.log("Successfully sent message:", response);
                        })
                        .catch(function (error) {
                            console.log("Error sending message:", error);
                        });
                }
            });
            res.json({"response_code": "200", "message": "Rejected Successfully"});
        } else {
            UserModel.findOne({user_id: doc._doc.reciverid}, {reg_key: true}, function (err, result) {
                if (err != null) {

                } else {
                    var registrationToken = result._doc.reg_key;
                    admin.messaging().sendToDevice(registrationToken, payload2)
                        .then(function (response) {
                            // See the MessagingDevicesResponse reference documentation for
                            // the contents of response.
                            console.log("Successfully sent message:", response);
                        })
                        .catch(function (error) {
                            console.log("Error sending message:", error);
                        });
                }
            });
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
exports.send_reminder = function (req, res) {
    var payload = {
        notification: {
            title: "The Hindu Wedlock",
            body: "User sent Reminder."
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };
    UserModel.findOne({user_id: req.body.user_id}, {reg_key: true}, function (err, result) {
        if (err != null) {

        } else {
            var registrationToken = result._doc.reg_key;
            admin.messaging().sendToDevice(registrationToken, payload)
                .then(function (response) {
                    // See the MessagingDevicesResponse reference documentation for
                    // the contents of response.
                    console.log("Successfully sent message:", response);
                    res.json({"response_code": "200", "message": "Reminder sent Successfully"});
                })
                .catch(function (error) {
                    console.log("Error sending message:", error);
                });
        }

    })


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

    if (req.body.gender != null && req.body.gender != undefined) {
        seacrhArray.push({gender: req.body.gender});
    }
    if (req.body.city_id != null && req.body.city_id != undefined) {
        seacrhArray.push({city_id: req.body.city_id.split(",")});
    }
    if (req.body.state_id != null && req.body.state_id != undefined) {
        seacrhArray.push({state_id: req.body.state_id.split(",")});
    }
    if (req.body.country_id != null && req.body.country_id != undefined) {
        seacrhArray.push({country_id: req.body.state_id.split(",")});
    }
    if (req.body.from_height != null && req.body.from_height != undefined && req.body.to_height != null && req.body.to_height != undefined) {
        seacrhArray.push({height_id: {$gt: parseInt(req.body.from_height), $lt: parseInt(req.body.to_height)}})
    }
    if (req.body.from_age != null && req.body.from_age != undefined && req.body.to_age != null && req.body.to_age != undefined) {

        // seacrhArray.push({dob: {$gt: datefrom, $lt: dateto}})
    }
    if (req.body.photo_count != null && req.body.photo_count != undefined) {
        seacrhArray.push({photo_count: parseInt(req.body.photo_count)});
    }
    if (req.body.from_income != null && req.body.from_income != undefined && req.body.to_income != null && req.body.to_income != undefined) {
        seacrhArray.push({income_id: {$gt: parseInt(req.body.from_income), $lt: parseInt(req.body.to_income)}})
    }
    if (req.body.education != null && req.body.education != undefined) {
        seacrhArray.push({education_id: req.body.education_id.split(",")});
    }
    if (req.body.religion != null && req.body.religion != undefined) {
        seacrhArray.push({religion_id: req.body.religion.split(",")});
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
            UserModel.count({$or: seacrhArray}, callback)
        },
        user_data: function (callback) {
            UserModel.find({
                $or: seacrhArray
            }, userProjection).skip(page * 5).limit(5).sort('_id')
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
