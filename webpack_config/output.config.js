var dirVars = require('./base/dir_vars.config.js');
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  filename: '[name]/entry.js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  chunkFilename: '[id].bundle.js',
};
