var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  devtool: 'source-map',
  entry: './src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: 'build',
    filename: 'js/bundle.min.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};
