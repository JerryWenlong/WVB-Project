var homePage = require('homepage')
var content = require('./content_jumbotron.ejs')
var loginInfo = require('componentsDir/loginUserInfo.js')

module.exports = homePage({
    userInfo:loginInfo,
    content:content({name: 'Jerry'})
})