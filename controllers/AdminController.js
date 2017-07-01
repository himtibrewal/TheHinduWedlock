/**
 * Created by him on 10-Apr-17.
 */

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
var async = require('async');

exports.add_category = function (req, res, next) {
    var category = new Category(
        {
            category_id: req.body.category_id,
            category: req.body.category_name
        }
    );
    category.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': category
        });
    })
};

exports.add_complexion = function (req, res, next) {
    var complexion = new Complexion(
        {
            complexion_id: req.body.complexion_id,
            complexion: req.body.complexion_name
        }
    );
    complexion.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': complexion
        });
    })
};


exports.add_country = function (req, res, next) {
    var country = new Country(
        {
            country_id: req.body.country_id,
            country: req.body.country_name
        }
    );
    country.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': country
        });
    })
};

exports.add_education = function (req, res, next) {
    var education = new Education(
        {
            education_id: req.body.education_id,
            education_dep: req.body.education_dep,
            education: req.body.education_name
        }
    );
    education.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': education
        });
    })
};


exports.add_employee = function (req, res, next) {
    var employee = new Employee(
        {
            employee_id: req.body.employee_id,
            employee: req.body.employee_name
        }
    );
    employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': employee
        });
    })
};

exports.add_height = function (req, res, next) {
    var height = new Height(
        {
            height_id: req.body.height_id,
            height: req.body.height_name
        }
    );
    height.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': height
        });
    })
};


exports.add_income = function (req, res, next) {
    var income = new Income(
        {
            income_id: req.body.income_id,
            income: req.body.income_name
        }
    );
    income.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': income
        });
    })
};

exports.add_language = function (req, res, next) {
    var language = new Language(
        {
            language_id: req.body.language_id,
            language: req.body.language_name
        }
    );
    language.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': language
        });
    })
};

exports.add_maritial = function (req, res, next) {
    var marital = new MaritalStatus(
        {
            marital_id: req.body.marital_id,
            marital: req.body.marital_name
        }
    );
    marital.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': marital
        });
    })
};
exports.add_physical = function (req, res, next) {
    var physical = new Physical(
        {
            physical_id: req.body.physical_id,
            physical: req.body.physical_name
        }
    );
    physical.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'complextion': physical
        });
    })
};


exports.add_state = function (req, res, next) {
    var state = new State(
        {
            state_id: req.body.state_id,
            country_id: req.body.country_id,
            state: req.body.state_name
        }
    );
    state.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            'response_code': '200',
            'status': 'success',
            'message': 'Data inserted successfully',
            'state': state
        });
    })
};














