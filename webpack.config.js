const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: 'production',
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
 };