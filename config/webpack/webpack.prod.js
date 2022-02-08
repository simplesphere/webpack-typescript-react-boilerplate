const paths = require('./paths')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [new BundleAnalyzerPlugin()],
  output: {
    path: paths.outputPath,
    filename: './assets/js/[name].[contenthash:8].js',
    assetModuleFilename: './assets/img/[name].[contenthash:8].[ext]',
    clean: true,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          toplevel: true,
          module: true,
          compress: {
            warnings: false,
            ecma: 6,
            module: true,
            toplevel: true,
          },
          output: {
            comments: false,
            beautify: false,
            indent_level: 2,
            ecma: 6,
          },
          mangle: {
            keep_fnames: true,
            module: true,
            toplevel: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
}
