var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    
    './index.js'
  ],
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
