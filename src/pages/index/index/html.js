var homePage = require('homepage')
var content = require('./content.ejs')
module.exports = homePage({content:content()})