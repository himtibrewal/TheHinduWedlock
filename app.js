var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var admin = require("firebase-admin");
// var multer = require('multer');
// var formidable = require('formidable');

var index = require('./routes/index');
var users = require('./routes/users');
var localadmin = require('./routes/admin');


var app = express();

var mongoDb = 'mongodb://himanshu:12345678@ds015720.mlab.com:15720/thehinduwedlock';
mongoose.connect(mongoDb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection Error'));
db.on('connected', console.info.bind(console, 'Connected To my  Server'));
db.on('disconnected', console.info.bind(console, 'Disconnected to my server'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', users);
app.use('/apiadmin', localadmin);


//var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://upheld-beach-169316.firebaseio.com"
});

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: "upheld-beach-169316",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7YMtrwAjEytn7\nIX2CdJMyYIMKY9AewGjArQKd2h7CQ37ppljizYcOvDKXVpdaU0QNVqhlWCYxbmjp\nL8ACSMgcWO6o7IHE47BzremPinltxb5qbogCXIrgg2HhMt+8Blwufgu4bFvsdB/N\n7OOi35FzKU2owquImp8j3KNhJANcgzQV7UiXBeb4qMAKRwBH3MaHPqbcqe2lRzGy\nrGgMY/vrtK6LcjJ7BOKdANSCeGROX5RlUewalOR5aVMNhDIsP9BBQJ828dtF5Qc2\nFadB8L7qszpQXzU9TPxJaZkazpAqiTIVZy/9phlSjKcIcspnAxiSrdp5QFi4sLa+\n7DftgwAzAgMBAAECggEAFNW6o2oFxOqwrz8LkiW9N5+fTS3ztnT65jBhTJpey4dZ\ncB3aNKnZcnbUV0XpFsGQcmfoLztMeo2be7ueqYJclzj/nJKOYWKskZ2iYp6+nslF\n7CwLJ9wQvc3ODzjVbjZKKgnuQAedzF54f4YaJQJKotf9Cx6jl9ES5e1tez/XtyxX\nMwKjgZX1VdYcybGm5yqH/iMLAuqwXTMHPf8HxJQ+4u6xQ25YjzRahlDhOJh22KYo\neZJ5csvno1YOn81eClA9sTcktm2jkZvDhPRqQmLoUAYt2iE7ZJ96KSUhroBj1gCq\n6rIoQ8z0EraNiRDzjYUYnBCspSmyM1vQAe/xhCCfJQKBgQD3RWSojeZ4wD/h57Ot\nL0RUTRshFXCMUt7GaWOU9AdQT4T+j2hlkFV4obRMTqeTw1TaO+RzysVx7YIEMGvo\neGM32DCoaS2K3SsXZHlMPmjj/+tvXGl3SaGt6gdt45ugEzpOEtWng83MzKaiCORX\n2b21i1l0gGur3LimVrW9ZOWDHQKBgQDB/iTxRbZFWn/hKD7KvRDg+ySiu5nHiAy5\nrzYPxeGsuN+K5/OfNGQ7qYxhRem32TNhWC6RixeJemPenyAao6ailQcdINxoXvXL\nVA67aw29wutrUUxNWM7QF7UeD35QxfVFNuF0r/kUcwX2NclK1Q3yXbj5hldLV3ON\nN1GuzJNfjwKBgGcvGfYMYOR6tS271oqqcsUK+AsyOykTW8tIJzn9KyAkTsc7aMEZ\nHdGdCPPezqcml74JyCdZslL8XYkJ+72inySqnoNogIy2BklYsBVU5che/wwVcB1L\nKKC+TCNbG5IM9AOocGfa5IJV1CNBuqe+QSAE6mtnO4cYMCWZgXVrKSsxAoGAYwmO\nbqa6YTnMo3RaakKPxWwxzeqcnaM1a+6pWPAbQIS5iz7Tv2mN6m+qvVZl9XgrpPzR\n+XfbMlKLffIa/76gqcwPb62BGL+yGHX3d3M19rT2XzmIDMzT+KTB0HD0eeQ2TXmx\nLFNShEAcwQ/AjjWrAxsZ/jm5gztIQMYHK4hBjL0CgYEA5SsO76VVOltCdFIjLkCE\ndqxY76b7YIZNtC7Wh/WIgB0/p0JOZVhRkOnK2l95G8Z4alkvRaG0mm8kSsnNGlhX\nqfTJIFkZEbeJdgcxz9HxpTNSBSpl73uioTixNDl7n5Clx4XLlYnmq+fVyrbhfOPn\niui6622qrC+HtxqgwN1+Wn4=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-08mkm@upheld-beach-169316.iam.gserviceaccount.com"
    }),
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({'response_code': '202', 'status': 'failed', "error": err.message, 'error_detail': err});
});

module.exports = app;
