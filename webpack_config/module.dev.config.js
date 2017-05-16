var dirVars = require('./base/dir_vars.config.js');
//Extract text from bundle into a file.从bundle中提取出特定的text到一个文件中。使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const moduleConfig = require('./inherit/module.config.js');

// /*
//   由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
//   如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
// */
// moduleConfig.rules.push({
//   test: /\.css$/,
//   exclude: /node_modules|bootstrap/,
//   // loader: 'style!css?minimize&-autoprefixer!postcss',
//   use: [
//     {
//       loader: 'style-loader',
//     },
//     {
//       loader: 'css-loader',
//     }
//   ],
// });

// moduleConfig.rules.push({
//   test: /\.css$/,
//   include: /bootstrap/,
//   // loader: 'style!css',
//   use: [
//     'style-loader', 'css-loader',
//   ],
// });

moduleConfig.rules.push({
  test:/\.css$/,
  use:ExtractTextPlugin.extract({
    use:'css-loader',
    fallback: 'style-loader',
  })
});

module.exports = moduleConfig;
