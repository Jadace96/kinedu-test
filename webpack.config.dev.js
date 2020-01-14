const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

const devConfig = {
  // EVIROMENT MODE
  mode: 'development',

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // PLUGINS
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  // DEV SERVER
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'src/index.js'),
  },
};

module.exports = merge(webpackBaseConfig, devConfig);
