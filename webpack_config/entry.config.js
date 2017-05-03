var path = require('path');
var dirVars = require('./base/dir_vars.config.js');
var pageArr = require('./base/page_entries.config.js');
var configEntry = {};

pageArr.forEach((page) => {
  configEntry[page] = path.resolve(dirVars.pagesDir, page + '/page');
});

module.exports = configEntry;
