var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// var multer = require('multer');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config.js');

var app = express();// 创建一个express实例
var compiler = webpack(webpackConfig);// 调用webpack并把配置传递过去
var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath: '/',
    stats:{
        colors:true,
        chunks: false
    }
})

app.use(cookieParser('cookieParser'));

//redis
var redis = require('./modules/redis.js')

redis.testConnect();
var RedisStore = require('connect-redis')(session)
app.use(session({
    store: new RedisStore({client: redis.client}),
    secret: 'alwaysJs.com',
    resave: false,
    saveUninitialized: true
}))
//lost connections to redis?
app.use(function(req, res, next){
    if(!req.session){
        console.log('lost connect redis');
        return next(new Error('oh no'));
    }
    next();
})


app.use(bodyParser.json())// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded

app.use(devMiddleware)
app.use(require("webpack-hot-middleware")(compiler))//热加载
app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);

var router_index = require('./router/index')
var router_login = require('./router/login');
console.log('hello')

app.use('/', router_index)
app.use('/login', router_login)
module.exports = app;