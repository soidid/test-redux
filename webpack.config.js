var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:'./main.js',
  output: {
    //path: path.join(__dirname, 'static'),
    path: './static',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },  {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }]
  }
};
