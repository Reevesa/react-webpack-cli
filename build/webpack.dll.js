const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: [ 'react', 'react-dom' ] // 公用包放里面
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].dll.js',
        library: '_dll_[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist', 'vendor-manifest.json'),
            name: '_dll_[name]', // 与 output.library 一样即可
        })
    ]
};