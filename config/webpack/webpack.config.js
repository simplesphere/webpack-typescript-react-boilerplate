const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.common.js')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`)
  return merge(webpackCommonConfig, envConfig)
}
