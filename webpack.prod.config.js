
module.exports = {
  entry: require('./webpack_config/entry.config.js'),

  output: require('./webpack_config/output.config.js'),

  module: require('./webpack_config/module.prod.config.js'),

  resolve: require('./webpack_config/resolve.config.js'),
  
  plugins: require('./webpack_config/plugins.prod.config.js'),

  devServer: require('./webpack_config/vendor/devServer.config.js')

};
