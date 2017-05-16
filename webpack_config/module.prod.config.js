var dirVars = require('./base/dir_vars.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const moduleConfig = require('./inherit/module.config.js');

moduleConfig.rules.push({
  test:/\.css$/,
  use:ExtractTextPlugin.extract({
    use:'css-loader',
    fallback: 'style-loader',
  })
});

module.exports = moduleConfig;
