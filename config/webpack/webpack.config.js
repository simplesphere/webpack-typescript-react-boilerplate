const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';
const rootDir = '../../';

module.exports = {
  entry: path.resolve(__dirname, rootDir, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, rootDir, 'dist'),
    filename: devMode ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, rootDir, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
