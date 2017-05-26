var homePage = require('homepage')
var content = require('./content.html')
var loginInfo = require('componentsDir/loginUserInfo.js')

module.exports = homePage({
    userInfo:loginInfo,
    content:content
})