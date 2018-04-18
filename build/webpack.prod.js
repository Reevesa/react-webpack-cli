const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return merge(baseWebpackConfig, {
        devtool: 'source-map',
        entry: {
            index: [ 'babel-polyfill', './src/js/index.js' ],
            vendor: [
                'antd',
                'react-router',
                'react',
                'react-dom',
                'react-redux',
                'moment'
            ],
        },
        output: {
            filename: '[name].[chunkhash:8].js',
            path: path.resolve(__dirname, '../dist'),
            publicPath: './'
        },
        module: {
            rules: [
                // {
                //   enforce: "pre",
                //   test: /\.js$/,
                //   exclude: '/node_modules/',
                //   use: [
                //     {
                //       loader: 'eslint-loader',
                //       options: {
                //         emitError: true,
                //         fix: true
                //       },
                //     }
                //   ]
                // },
                {
                    test: /\.(jpg|png|gif|svg)$/i,
                    include: path.join(__dirname, '../src'),
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1000,
                                name: 'imgs/[name].[hash:8].[ext]'
                            }
                        }
                        /*, {
                                loader: 'image-webpack-loader',
                                options: {
                                    gifsicle: {
                                    interlaced: false,
                                    },
                                    optipng: {
                                    optimizationLevel: 7,
                                    },
                                    pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                    },
                                    mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                    }
                                }
                        } */
                    ]
                },
                {
                    test: /\.(css)$/,
                    exclude: '/node_modules/',
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [ 'css-loader' ]
                    }),
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [ 'css-loader', {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                                modifyVars: { 'font-size-base': '14px', '@icon-url': '"/iconfont"' }
                            }
                        } ]
                    })
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
        plugins: [
            new CleanWebpackPlugin([ 'dist' ], {
                root: path.join(__dirname, '../')
            }),
            new CopyWebpackPlugin([
                { from: './static/**/*', to: './', flatten: true },
                // { from: './src/flexpaper', to: './js/flexpaper' },
            ]),
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             warnings: false,
            //             drop_console: true,
            //             drop_debugger: true
            //         },
            //         output: {
            //             comments: false
            //         }
            //     } 
            // }),
            new HtmlWebpackPlugin({
                version: env && env.version || 'v1.0.0',
                isDev: 'false',
                favicon: './src/assets/favicon.ico', // favicon路径
                alwaysWriteToDisk: true,
                filename: './index.html',
                template: './static/index.html',
                chunks: [ 'manifest', 'vendor', 'index' ],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                }
            }),
            // new ExtractTextPlugin('styles.css'),
            new ExtractTextPlugin({
                filename: 'style.css',
                allChunks: true
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify('production')
            })
        ]
    });
};