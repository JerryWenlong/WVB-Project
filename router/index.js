var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    let _site = req.session.site;
    let hasLogin = false;
    let userName = '';
    if(_site){
        hasLogin = true;
        userName = _site.userName;
    }
    res.render('index/home/page.ejs', {
        user:{
            isLogin: hasLogin,
            userName: userName
        }
    })
})
router.get('/logout', function(req, res, next){
    req.session.destroy(function(message){
        console.log('session destory')
        res.redirect('/')
    })
    
})

router.get('/editor', function(req, res, next){
    let _site = req.session.site;
    let hasLogin = false;
    let userName = '';
    if(_site){
        hasLogin = true;
        userName = _site.userName;
    }
    res.render('index/markdown/page.ejs', {
        user:{
            isLogin: hasLogin,
            userName: userName
        }
    })
})

router.post('/saveMdFile', function(req, res, next){
    res.send({
        message: 'success'
    })
})
module.exports = router