var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('login/signin/page.ejs', {})
})
router.post('/', function(req, res, next){
    console.log('userName->'+req.body.userName);
    console.log('password->'+req.body.password);
    req.session.site = {name: req.body.userName, pw: req.body.password, isLogin: true};
    console.log('session.id->'+req.session.id)
    res.redirect('/')
})

module.exports = router