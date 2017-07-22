var express = require('express');
var router = express.Router();
var multer = require('multer');


var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


//create new users

router.post('/users', userController.create_new_user);
//create login
router.post('/login', userController.user_login);
//show user
router.post('/userlist', userController.user_list);

router.post('/sendrequest', userController.sent_interest);

router.post('/alldata', userController.alldata);

router.post('/update_your_self', userController.updateuser_about_your);

router.post('/update_family_detail', userController.updatereg_family_detail);

router.post('/update_about_family', userController.updateuser_about_family);

router.post('/mobile_verify', userController.updateuser_mobile_verify);

router.post('/image_upload', userController.imageupload);
//
router.post('/update_ethnicity', userController.updateuser_ethnicity);

router.post('/update_appearance', userController.updateuser_appearance);

router.post('/update_spclcase', userController.updateuser_spclcase);

router.post('/update_kundli', userController.updateuser_kundli);

router.post('/update_about_edu', userController.updateuser_about_edu);
//college
router.post('/update_college', userController.updateuser_collegedetail);


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'https://storage.googleapis.com/hinduwedlock/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);

    }
});
var upload = multer({storage: storage});

router.post('/upload', upload.any(), userController.uploadimage);


//upload  image


module.exports = router;
