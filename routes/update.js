var express = require('express');
var router = express.Router();
var multer = require('multer');

var userController = require('../controllers/UpdateController');

router.post('/update_your_self', userController.updateuser_about_your);

router.post('/update_family_detail', userController.updatereg_family_detail);

router.post('/update_about_family', userController.updateuser_about_family);

router.post('/mobile_verify', userController.updateuser_mobile_verify);

router.post('/image_upload', userController.imageupload);

router.post('/all_image', userController.all_image);

router.post('/make_profile', userController.make_profile_picture);

router.post('/delete_image', userController.delete_image);

router.post('/update_ethnicity', userController.updateuser_ethnicity);

router.post('/update_appearance', userController.updateuser_appearance);

router.post('/update_spclcase', userController.updateuser_spclcase);

router.post('/update_kundli', userController.updateuser_kundli);

router.post('/update_about_edu', userController.updateuser_about_edu);

router.post('/update_college', userController.updateuser_collegedetail);

module.exports = router;