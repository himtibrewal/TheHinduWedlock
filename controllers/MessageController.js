var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var async = require('async');
var admin = require("firebase-admin");
var UserModel = require('../models/UserModel');
var MessageModel = require('../models/MessageModel');
exports.message_send = function (req, rea, next) {
    var messageData = new MessageModel(
        {
            senderid: req.body.user_id,
            reciverid: req.body.recieve_id,
            time: Date.now(),
            message: '',
            status: ''
        }
    );

    var payload = {
        notification: {
            title: "The Hindu Wedlock",
            body: "You Got New Interest."
        },
        data: {
            key1: "demo data",
            key2: "demo deta2"
        }
    };

    MessageModel.save()
};

