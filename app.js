var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose  =  require('mongoose');
var multer  = require('multer');
var formidable = require('formidable');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

var app = express();

var mongoDb  = 'mongodb://himanshu:12345678@ds015720.mlab.com:15720/thehinduwedlock';
mongoose.connect(mongoDb);
var  db  =   mongoose.connection;
db.on('error',console.error.bind(console ,'MongoDb connection Error'));
db.on('connected',console.info.bind(console ,'Connected To my  Server'));
db.on('disconnected',console.info.bind(console,'Disconnected to my server'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', users);
app.use('/apiadmin',admin);




//upoload your image
app.get('/upload', function (req, res){
    res.sendFile(__dirname + '/response.html');
});

app.post('/upload', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/upload/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded '+name + file.name);
    });

    res.json({'hii':'helooo'});
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({'response_code':'202','status':'failed',"error":err.message ,'error_detail':err });
});

module.exports = app;
