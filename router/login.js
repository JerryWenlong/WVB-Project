var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.render('login/signin/page.ejs', {})
})
router.post('/', function(req, res, next){
    let userName = req.body.userName;
    let pw = req.body.password;
    req.session.site = {userName: userName, pw: pw}
    res.redirect('/')
})

module.exports = router