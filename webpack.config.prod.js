const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBaseConfig = require('./webpack.config.base');

const prodConfig = {
  // EVIROMENT MODE
  mode: 'production',

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.[hash].js',
  },

  // PLUGINS
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(webpackBaseConfig, prodConfig);
