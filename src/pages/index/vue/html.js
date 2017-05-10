var page = require('homepage');
var content = require('./content.ejs')
module.exports = page({content: content()})