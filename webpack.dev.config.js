var Entry = require('./webpack_config/entry.config.js');

Object.keys(Entry).forEach(function (name) { 
    var extras = ['webpack-hot-middleware/client?reload=1'];
     Entry[name] = extras.concat(Entry[name]);
});
module.exports = {
  entry: Entry,

  output: require('./webpack_config/output.config.js'),

  module: require('./webpack_config/module.dev.config.js'),

  resolve: require('./webpack_config/resolve.config.js'),
  
  plugins: require('./webpack_config/plugins.config.js'),

  devServer: require('./webpack_config/vendor/devServer.config.js')

};
