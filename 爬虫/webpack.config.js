const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-js-plugin');
module.exports = {
    mode: "development",
    entry: "./index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template/index.html', // 源模板文件
            suck: 'suck!'
        }),
        new UglifyJsPlugin({
            compress: {
              warnings: false,
              drop_console: false,
            }
          })
    ],
    module: {
        rules:
            [{
                test: /\.css$/, use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }]
            }]
    },
}