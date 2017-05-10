var homePage = require('homepage')
var content = require('./content_jumbotron.ejs')
module.exports = homePage({content:content()})