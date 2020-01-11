const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // ENTRY POINT
  entry: path.resolve(__dirname, 'src/index.js'),

  // PLUGINS
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'kinedu.config': JSON.stringify({
        API_CLIENTS: {
          BASE_URL: 'http://demo.kinedu.com/api/v3',
        },
      }),
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader'],
      },
    ],
  },
};
