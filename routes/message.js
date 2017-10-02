var express = require('express');
var router = express.Router();
var multer = require('multer');

var userController = require('../controllers/UserController');
var UserModel = require('../models/UserModel');
var MessageModel = require('../models/MessageModel');

router.post('/get_accepted_by_me', userController.get_accepted_by_me);

module.exports = router;