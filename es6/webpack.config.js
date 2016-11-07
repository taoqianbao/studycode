var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [{
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
        "presets": [
            "es2015",
            "stage-0"
        ],
        "plugins": []
    }
}];

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve('src/es6-module-single-instance/', 'main.js'),
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: loaders
    }
};
