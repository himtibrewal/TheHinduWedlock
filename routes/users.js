var express = require('express');
var router = express.Router();
var multer = require('multer');


var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('This Is Internal Service Please Do  Not Hit');
});
//create new users
router.post('/register_user', userController.create_new_user);
//create login
router.post('/login', userController.user_login);
//show user
router.post('/userlist', userController.user_list);

router.post('/alldata', userController.alldata);


router.post('/send_interest', userController.create_new_instrest);

router.post('/send_shortlist', userController.create_new_shortlist);

router.post('/send_block', userController.create_new_blocklist);

router.post('/block_user_list', userController.getblocked_user);

router.post('/delete_blocked_user', userController.delete_block);

router.post('/get_interest_sent', userController.getInterest_sent);

router.post('/get_interest_received', userController.getInterest_received);

router.post('/accept_decline_interest', userController.accept_reject_interest);

router.post('/send_reminder', userController.send_reminder);

router.post('/delete_interest', userController.delete_interest);

router.post('/get_contact_detail', userController.get_contact);

router.post('/get_accepted_by_me', userController.get_accepted_by_me);

router.post('/get_accepted_me', userController.get_accepted_me);

router.post('/get_user_detail', userController.get_user_detail);

router.post('/get_i_declined', userController.get_i_declined);

router.post('/get_they_declined', userController.get_they_declined);

router.post('/last_online', userController.last_online);


//upload  image


module.exports = router;
