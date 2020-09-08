const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|woff2|woff|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.ico',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ] 

};