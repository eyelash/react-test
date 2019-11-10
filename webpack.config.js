const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}