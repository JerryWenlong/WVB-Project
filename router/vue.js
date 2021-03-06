var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    if(req.session.site){
        res.render('index/vue/page.ejs', {
            user: {
                isLogin: req.session.site.isLogin,
                userName: req.session.site.name
            }
        })
    }else{
         res.render('index/vue/page.ejs', {
            user: {
                isLogin: false,
                userName: ''
            }
        })
    }
    
})

module.exports = router