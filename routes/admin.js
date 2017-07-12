/**
 * Created by him on 10-Apr-17.
 */
var express = require('express');

var router = express.Router();

//Admin controller  call  here

var adminController = require('../controllers/AdminController');

// Add category
router.post('/category', adminController.add_category);
//add Complexion
router.post('/complexion', adminController.add_complexion);
//add Country
router.post('/country', adminController.add_country);
//add education
router.post('/education', adminController.add_education);
//add employee
router.post('/employee', adminController.add_employee);
//add height
router.post('/height', adminController.add_height);
//add income
router.post('/income', adminController.add_income);
//add Language
router.post('/language', adminController.add_language);
//add  maritial status
router.post('/marital', adminController.add_maritial);
//add physical
router.post('/physical', adminController.add_physical);
//add state
router.post('/state', adminController.add_state);
//add state
router.post('/city', adminController.add_city);


module.exports = router;