var express = require('express');
var path = require('path');
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
app.use(devMiddleware)

app.set('views', path.join(__dirname, 'build'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').__express);

var router = express.Router();
router.get('/', function(req, res, next){
    res.render('index/home/page.ejs', {})
})

app.use('/', router)
module.exports = app;