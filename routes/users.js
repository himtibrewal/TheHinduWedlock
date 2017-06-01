var express = require('express');
var router = express.Router();
var multer = require('multer');

var userController  =  require('../controllers/UserController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//create new users

router.post('/users',userController.create_new_user);
//create login
router.post('/login',userController.user_login);
//show user
router.get('/userlist/:page_no',userController.user_list);

router.post('/sendrequest',userController.sent_interest);

router.post('/alldata',userController.alldata);




var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname);

    }
});
var upload = multer({ storage:storage });

router.post('/upload',upload.any(),userController.uploadimage);



//upload  image









module.exports = router;