var express = require('express');
var router = express.Router();
var multer  = require('multer')



//require controller
var testController  =  require('../controllers/testController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create',testController.create_user);
router.post('/show',testController.showuesr);





module.exports = router;
