var page = require('homepage');
var content = require('./content.ejs')
var loginInfo = require('componentsDir/loginUserInfo.js')
module.exports = page({
    userInfo:loginInfo,
    content: content()
})