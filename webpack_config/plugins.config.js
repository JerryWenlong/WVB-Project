var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var dirVars = require('./base/dir_vars.config.js');
var pageArr = require('./base/page_entries.config.js');

var configPlugins = [];

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

configPlugins.push(new webpack.HotModuleReplacementPlugin())
module.exports = configPlugins;
