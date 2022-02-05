const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isEnvDev = process.env.NODE_ENV === 'development';
const rootDir = '../../';

module.exports = {
  entry: path.resolve(__dirname, rootDir, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, rootDir, 'dist'),
    filename: isEnvDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, rootDir, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '@': path.resolve(__dirname, './src'),
          },
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
};
