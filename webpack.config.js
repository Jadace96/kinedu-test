const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // ENTRY POINT
  entry: path.resolve(__dirname, 'src/index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

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
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },

  // PLUGINS
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],

  // DEV SERVER ENTRY POINT
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
