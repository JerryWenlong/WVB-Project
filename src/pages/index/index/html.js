var homePage = require('homepage')
var content = require('./content.ejs')
var loginInfo = require('componentsDir/loginUserInfo.js')
module.exports = homePage({
    userInfo:loginInfo,
    content:content()
})