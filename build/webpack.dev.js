const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.js');

var config = merge(baseWebpackConfig, {
    devtool: 'eval',
    mode: "development",
    entry: {
        index: [ 'babel-polyfill', './src/js/index.js' ],
    },
    output: {
        filename: '[name].bundle.js', // 输出路径
        path: path.join(__dirname, '../dist'), // 文件名[entryName] [hash:len] [chunkhash:len]
        // chunkFilename: 'js/[id].[hash:8].js',
        publicPath: '/' // 资源访问路径，CDN
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/i,
                include: path.join(__dirname, '../src'),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [ [ 'import', { 'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true } ], 'transform-proto-to-assign' ]
                        },
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        noInfo: false,
        stats: {
            colors: true
        },
        historyApiFallback: true,
        /* proxy: { // 转发接口
            '/api/*': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            }
        }, */
        // historyApiFallback: true
    },
    plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': JSON.stringify('development')
    // }),
        new HtmlWebpackPlugin({
            isDev: 'true',
            // favicon: './src/assets/favicon.ico', // favicon路径
            alwaysWriteToDisk: true,
            filename: './index.html',
            vendor: './vendor_dll.js',
            template: './static/index.html', // 这个路径 ./ 是以当前 publicPath 为当前路径
            chunks: [ 'manifest', 'vendor', 'index' ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             * 在这里引入 manifest 文件
             */
            manifest: require('../dist/vendor-manifest.json')
        })
    ]
});


module.exports = config;