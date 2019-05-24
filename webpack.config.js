const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./src/client/index.js'],
  output: {
    path: path.join(__dirname, '/src/client/dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/client/index.html'
    })
  ],
  devServer: {
    port: 3000,
    open: true
  },
}