/**
 * Created by him on 08-Apr-17.
 */

var UserModel = require('../models/UserModel');
var InterestModel =  require('../models/InterestModel');
var  mongoose  = require('mongoose');
var express = require('express');
var router = express.Router();
var multer = require('multer');

//call  modeel

var categoryModel =  require('../models/CategoryModel');
var complexionModel =  require('../models/ComplexionModel');
var Category = require('../models/CategoryModel');
var Complexion =  require('../models/ComplexionModel');
var Country =  require('../models/CountryModel');
var Education =  require('../models/EducationModel');
var Employee = require('../models/EmployeeModel');
var Height  =  require('../models/HeightModel');
var Income  =  require('../models/IncomeModel');
var Language = require('../models/LanguageModel');
var MaritalStatus  =  require('../models/MaritalStatusModel')
var Physical  = require('../models/PhysicalModel');
var State = require('../models/StateModel');





var async = require('async')

exports.create_new_user = function (req , res , next) {
   var RegisterData = new UserModel(
        {
            m_id:req.body.m_id,
            name:req.body.name,
            gender:req.body.gender,
            dob:req.body.dob,
            marital_status:req.body.marital_status,
            height:req.body.height,
            complexion:req.body.complexion,
            body_type:req.body.body_type,
            mother_tongue:req.body.mother_tongue,
            category:req.body.category,
            languages:req.body.languages,
            about_me:req.body.about_me,
            education:req.body.education,
            employment:req.body.employment,
            income:req.body.income,
            hobbies:req.body.hobbies,
            vegetarian:req.body.vegetarian,
            drinking:req.body.drinking,
            smoking:req.body.smoking,
            contact_person:req.body.contact_person,
            contact_relation:req.body.contact_relation,
            current_address:req.body.current_address,
            permanent_address:req.body.permanent_address,
            country:req.body.country,
            state:req.body.state,
            city:req.body.city,
            native_of:req.body.native_of,
            phone_no:req.body.phone_no,
            mobile_no:req.body.mobile_no,
            father_name:req.body.father_name,
            father_occupation:req.body.father_occupation,
            mother_name:req.body.mother_name,
            mother_occupation:req.body.mother_occupation,
            brothers_married:req.body.brothers_married,
            brothers_unmarried:req.body.brothers_unmarried,
            sisters_married:req.body.sisters_married,
            sisters_unmarried:req.body.sisters_unmarried,
            time_of_birth:req.body.time_of_birth,
            place_of_birth:req.body.place_of_birth,
            gothram:req.body.gothram,
            raasi:req.body.raasi,
            extra1:req.body.extra1,
            extra2:req.body.extra2,
            extra3:req.body.extra3,
            pp_from_age:req.body.pp_from_age,
            pp_to_age:req.body.pp_to_age,
            pp_education:req.body.pp_education,
            pp_category:req.body.pp_category,
            pp_complexion:req.body.pp_complexion,
            pp_from_height:req.body.pp_from_height,
            pp_bodytype:req.body.pp_bodytype,
            pp_any_information:req.body.pp_any_information,
            email:req.body.email,
            password:req.body.password,
            furnished:req.body.furnished,
            refer:req.body.refer
        }
    );


    RegisterData.save(function (err) {
        if (err) {
            return next(err); }
        //successful - redirect to new author record.
        res.json({'response_code':'200','status':'success','userDetail':RegisterData});

    });
};

//userLogin  from  app
exports.user_login = function (req,res,next) {

          var useremail = req.body.email;
          var pass = req.body.password;
    UserModel.findOne({email: useremail, password: pass}, function(err, result) {
        if(err) {
            return next(err);
        }else if(result == null){
            res.json({'data':result ,"response_code":"202","message":"Enter Valid credentials"});
        }else{
            res.json({'data':result ,"response_code":"200","message":"Login in Successfully !!"});
        }
      //  if(!user) return res.send('Not logged in!');
        //req.session.user = email;

    });

};


exports.user_list =  function(req, res, next){
     var page  = parseInt(req.params.page_no);
    //console.log('--'+page);
    async.parallel({
        user_count: function(callback) {
            UserModel.count(callback)
        },
        user_data: function(callback) {
            UserModel.find({}).skip(page*20).limit(20).sort('_id')
                .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        //Successful, so render
        res.json(results);
    });

};

exports.sent_interest  =   function (req, res, next) {
    var InterestData   =  new InterestModel(
        {
            senderid : req.body.sender_id,
            reciverid:  req.body.reciver_id,
            time:Date.now(),
            message:'Testing message',
            status:'P'
        }
    )

    InterestData.save(function (err) {
        if (err) {
            return next(err); }
        //successful - redirect to new author record.
        res.json({'response_code':'200','status':'success','userDetail':InterestData});

    });

};

exports.uploadimage = function (req, res ,next) {
    console.log(req.files);
      //  res.send(req.files);
    res.json({'message':'inserted'});
};


exports.alldata =  function (req, res,next) {

    async.parallel({
        category:function (callback) {
            Category.find({},'category_id category -_id').sort('category_id')
                .exec(callback)
        },
        complexion:function (callback) {
            Complexion.find({}).sort('_id')
                .exec(callback)
        },
        country:function (callback) {
            Country.find({}).sort('_id')
                .exec(callback)
        },
        education:function (callback) {
            Education.find({}).sort('_id')
                .exec(callback)
        },
        height:function (callback) {
            Height.find({}).sort('_id')
                .exec(callback)
        },
        income:function (callback) {
            Income.find({}).sort('_id')
                .exec(callback)
        },
        language:function (callback) {
            Language.find({}).sort('_id')
                .exec(callback)
        },
        maritial_status:function (callback) {
            MaritalStatus.find({}).sort('_id')
                .exec(callback)
        },
        physical:function (callback) {
            Physical.find({}).sort('_id')
                .exec(callback)
        }

    }, function (error,result) {
        res.json({"data":result,"response_code":"200","message":"Data fetch Successfully"});
    });
};


exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            UserModel.count(callback)
        },
        book_instance_count: function(callback) {
            BookInstance.count(callback)
        },
        book_instance_available_count: function(callback) {
            BookInstance.count({status:'Available'},callback)
        },
        author_count: function(callback) {
            Author.count(callback)
        },
        genre_count: function(callback) {
            Genre.count(callback)
        },
    }, function(err, results) {
     //   res.render('index', { title: 'Local Library Home', error: err, data: results });
        res.json(results);
    });
};


















