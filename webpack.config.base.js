'use strict'

var webpack = require('webpack')

module.exports = {
  externals: {
    react: 'react',
    'react-redux': 'react-redux',
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'ReactRedux',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
}
