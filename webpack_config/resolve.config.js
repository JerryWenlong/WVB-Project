var path = require('path');
var dirVars = require('./base/dir_vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    /* 各种目录 */
    cssDir: path.resolve(dirVars.publicDir, 'css/'),
    componentsDir: path.resolve(dirVars.publicDir, 'components/'),
    selfDir: path.resolve(dirVars.publicDir, 'self/'),
    vendorDir: dirVars.vendorDir,
    /* layout */
    homepage: path.resolve(dirVars.srcRootDir, 'index.html'),
    vue: 'vue/dist/vue.js', //
  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extensions: ['.js', '.css', '.less'],
};
