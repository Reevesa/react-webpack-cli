const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = {
    context: path.resolve(__dirname, '../'),

    // 用来配置依赖文件的匹配，如依赖文件的别名配置、模块的查找目录、默认查找的
    // 文件后缀名
    // resolve.root 该选型用来制定模块查找的根路径，必须为**绝对路径**，值可以
    // 是路径字符串或者路径数组若是数组，则会依次查找
    resolve: {
    // 自动扩展 不需要写后缀
        extensions: [ '.js', '.json', '.css' ],
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.join(__dirname, '../src')
        ],
        // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            // components: path.join(__dirname, '../src/js/component'),
            // utils: path.join(__dirname, '../src/utils'),
            assets: path.join(__dirname, '../src/assets'),
            // pages: path.join(__dirname, '../src/js/pages'),
            // data: path.join(__dirname, '../src/js/data'),
            // store: path.join(__dirname, '../src/js/store'),
        }
    },
    // webpack.optimize.CommonsChunkPlugin 在webpack 4 中弃用
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 2,
                    name: 'vendor'
                }
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    }
                } 
            })
        ]
    },
    plugins: [
        // CommonsChunkPlugin 插件 4.5 还能继续使用
        /* new webpack.optimize.CommonsChunkPlugin({
            name: [ 'manifest', 'vendor' ].reverse(), // reverse() 有什么特殊作用?
            minChunks: 2
        }), */
        new webpack.ProvidePlugin({
            Promise: 'es6-promise' // works as expected
        }),
        // 把模块放到一个函数,减少函数声明,文件体积变小,作用域变少
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};

module.exports = baseConfig;