/**
 * Created by him on 04-Apr-17.
 */
var Test  = require('../models/teastmodel');
var async  =  require('async');

//register  user

exports.create_user = function (req ,res,next) {
    var test = new Test(
        {
            name: req.body.name,
            // F_name:req.body.f_name ,
            email: req.body.email,
            password: req.body.password,
            temp: 'data'
        }
    );

    test.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({'info': 'user successfully created', 'id': test._id, 'name': test.name, 'test': test});
    })
}

exports.showuesr = function (req,res,next) {
    Test.find({'name':req.body.name},function (err ,data) {
        var size =  data.length;
        if(size== 13){
            res.json(data)
        }else{
            res.json({'data':size})
        }

    })

}


