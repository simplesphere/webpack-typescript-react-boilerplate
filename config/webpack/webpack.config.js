const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

const isEnvDev = process.env.NODE_ENV === 'development'
const rootDir = '../..'

module.exports = {
  entry: path.resolve(__dirname, rootDir, '/src/index.tsx'),
  output: {
    path: path.resolve(__dirname, rootDir, 'dist'),
    filename: isEnvDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    liveReload: false,
    port: 8080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, rootDir, '/src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new ReactRefreshPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
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
}
