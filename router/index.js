var express = require('express');
var router = express.Router();
var mdFileWriter = require('../modules/markdownFS.js')

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
    const content = req.body.content;
    const fileName = req.body.fileName; 
    var writer = new mdFileWriter(fileName);
    writer.saveAsync(content, function(){
        res.send({message: 'success'})
    }, function(){
        res.send(500, {message: 'failed to save file'})
    })
    
})
module.exports = router