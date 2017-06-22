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

// router.post('/checkWriteFile', function(req, res, next){
//     let fileName = req.body.fileName;
//     var writer = new mdFileWriter(fileName);
//     writer.writeFileCheck()
// })

router.post('/saveMdFile', function(req, res, next){
    const content = req.body.content;
    const fileName = req.body.fileName; 
    var writer = new mdFileWriter({fileName: fileName});
    writer.saveAsync(content, function(){
        res.send({message: 'success'})
    }, function(){
        res.send(500, {message: 'failed to save file'})
    })
    
})

router.get('/dirreader', function(req, res, next){
    let _site = req.session.site;
    let hasLogin = false;
    let userName = '';
    if(_site){
        hasLogin = true;
        userName = _site.userName;
    }
    res.render('index/dirread/page.ejs', {
        user:{
            isLogin: hasLogin,
            userName: userName
        }
    })
})

router.get('/getFileList', function(req, res, next){
    var reader = new mdFileWriter()
    reader.readDir(function(files){
        //success
        res.status(200).send({error: 0, data: files})
    }, function(){
        //failed
        res.status(500).send({error: 1, data:[]})
    })
})

router.post('/openFile', function(req, res, next){
    let fileName = req.body.fileName;
    // check if file exit
    var reader = new mdFileWriter()
    reader.readFileCheck(fileName, function(result){
        if(result.status == 0){
            console.log('file exist')
            reader.readAsync(fileName, function({err, data}){
                if(err){
                    //go to err page
                    res.status(500).send({err: true, data: '', msg: 'Read file failed!'})
                }else{
                    res.status(200).send({err: false, data: data})
                }
            })
        }else if(result.status == 1){
            //'not exist'
            res.status(500).send({err: true, data: '', msg: 'File not exist!'})
        }else{
            //error
            res.status(500).send({err: true, data: '', msg: 'Open file failed!'})
        }
    })
})

router.get('/infiniteList', function(req, res, next){
    let _site = req.session.site;
    let hasLogin = false;
    let userName = '';
    if(_site){
        hasLogin = true;
        userName = _site.userName;
    }
    res.render('index/vuerecyclerview/page.ejs', {
        user:{
            isLogin: hasLogin,
            userName: userName
        }
    })
})

router.get('/waterflow', function(req, res, next){
    let _site = req.session.site;
    let hasLogin = false;
    let userName = '';
    if(_site){
        hasLogin = true;
        userName = _site.userName;
    }
    res.render('index/waterflow/page.ejs', {
        user:{
            isLogin: hasLogin,
            userName: userName
        }
    })
})

router.get('/progressbar', function(req, res, next){
    res.render('index/progressbar/page.ejs')
})
module.exports = router