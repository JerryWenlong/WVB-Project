var express = require('express');
var router = express.Router();

// var User = require('./modules/user.js')

router.get('/', function(req, res, next){
    if(req.session.site){
        console.log('req.session.site.isLogin->' + req.session.site.isLogin);
        console.log('req.session.site.name->' + req.session.site.name);
        res.render('index/home/page.ejs', {
            user: {
                isLogin: req.session.site.isLogin,
                userName: req.session.site.name
            }
        })
    }else{
         res.render('index/home/page.ejs', {
            user: {
                isLogin: false,
                userName: ''
            }
        })
    }
    
})

module.exports = router