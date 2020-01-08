const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // ENTRY POINT
  entry: path.resolve(__dirname, "src/index.js"),

  // OUTPUT DIRECTORY
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle-[hash].js"
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || "development",

  // PATH RESOLVE
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "css-loader" }]
      }
    ]
  },

  // PLUGINS
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html"
    })
  ],

  // DEV SERVER ENTRY POINT
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, "src")
  }
};
