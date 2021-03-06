var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var dirVars = require('./base/dir_vars.config.js');
var pageArr = require('./base/page_entries.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var babiliWebpackPlugin = require('babili-webpack-plugin')
var configPlugins = [
  new ExtractTextPlugin('[name]/styles.css'),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
  //   filename: '[name]/entry.js',
  //   minChunks: 4,
  // }),
  // new webpack.optimize.UglifyJsPlugin({
  //   beautify: true,
  //   compress: {warnings: false,},
  //   output:{comments: true}
  // })
  new babiliWebpackPlugin() //压缩
];


pageArr.forEach((page) => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.ejs`,
    template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
    chunks: [page, 'commons/commons'],
    hash: true, // 为静态资源生成hash值
    xhtml: true,
  });
  configPlugins.push(htmlPlugin);
});

configPlugins.push(new webpack.LoaderOptionsPlugin({
    options: {
        devServer: require('./vendor/devServer.config.js')
    }
}))


module.exports = configPlugins;
