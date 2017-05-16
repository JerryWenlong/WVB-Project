var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var dirVars = require('./base/dir_vars.config.js');
var pageArr = require('./base/page_entries.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var configPlugins = [
  new ExtractTextPlugin('[name]/styles.css'),
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

/*热加载 hrm dependicy*/
configPlugins.push(new webpack.optimize.OccurrenceOrderPlugin())
configPlugins.push(new webpack.HotModuleReplacementPlugin())
configPlugins.push(new webpack.NoEmitOnErrorsPlugin())
/*********************/
module.exports = configPlugins;
